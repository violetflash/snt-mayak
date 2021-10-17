import React, {useState, useEffect, useContext, createContext} from "react";
import { useDispatch } from 'react-redux';
import { setData, setSettings, setActiveUser, clearActiveUser } from '../../redux';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { getArrayFromDb } from "../../functions/functions";

const MAIN_REF = "mayak";

//preparing to switch to rtk


//Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_FB_API,
    authDomain: process.env.REACT_APP_FB_DOMAIN,
    databaseURL: process.env.REACT_APP_FB_DATABASE,
    projectId: process.env.REACT_APP_FB_PROJECT,
    storageBucket: process.env.REACT_APP_FB_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_SENDER,
    appId: process.env.REACT_APP_FB_APP,
    measurementId: process.env.REACT_APP_FB_MEASUREMENT
  });
}


const FirebaseContext = createContext();

//Hook for child components to get the auth object and re-render when it changes
const useFirebase = () => {
  return useContext(FirebaseContext);
};

const auth = firebase.auth();
const fdb = firebase.database();

const LS_USERNAME = 'mayak-activeUser';

//Provider hook that creates auth object and handles state
const FirebaseProvider = ({children}) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // verify your email popup

  //firebase methods we want to use
  const writeUserDataToDB = (userId, name, email) => {
    fdb.ref(`${MAIN_REF}/users/` + userId)
      .set({
        userId,
        username: name,
        email
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const writeDataToDB = (data) => {
    fdb.ref(`${MAIN_REF}/${data.type}/` + data.id)
      .set({
        ...data,
        author: {name: auth.currentUser.displayName, email: auth.currentUser.email}
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateReduxData = (type) => {
    fdb.ref(`${MAIN_REF}/${type}/`).get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch(setData({ name: type, dataValue: getArrayFromDb(snapshot.val()) }));
        } else {
          dispatch(setData({ name: type, dataValue: null }));
        }
      })
  }

  const setSliderParams = (dbRef, name, value) => {
    fdb.ref(`${MAIN_REF}/params/${dbRef}`)
      .update({
        [name]: value
      })
  };

  const setSliderStartParams = (dbRef, params) => {
    fdb.ref(`${MAIN_REF}/params/${dbRef}`).set(params);
  };

  const setSlidersStartParams = () => {
    const newsSliderParamsRef = fdb.ref(MAIN_REF + `/params/news/`);
    const announceSliderParamsRef = fdb.ref(MAIN_REF + `/params/announce/`);
    const refs = [{ type: 'news', ref: newsSliderParamsRef },  { type: 'announce', ref: announceSliderParamsRef }];
    refs.forEach((elem) => {
      elem.ref.get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            dispatch(setSettings({ type: elem.type, settingsData: snapshot.val() }));
          } else {
            const params = {
              type: elem.type,
              itemsToShow: 3,
              animationType: "fadeout",
              animationDuration: 300,
              disableButtons: true,
              disableDotsControls: false,
              autoPlay: false,
              autoPlayInterval: 5000,
              disableSlideInfo: true,
              infinite: true,
            }
            dispatch(setSettings({ type: elem.type, settingsData: params}));
            setSliderStartParams(elem.type, params);
          }
        })
    });
  }

  const deleteRefFromDB = (ref) => {
    fdb.ref(`${MAIN_REF}/${ref}`).remove();
  };

  const sendVerificationEmail = (user) => {
    // const auth = getAuth();

    user.sendEmailVerification()
      .then(() => {
        console.log("check email!");
      });
    console.log("Отправлено письмо - подтверждение почты");
  }

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        dispatch(setActiveUser({ activeUser: result.user }));
        console.log(result.user);
        writeUserDataToDB(result.user.uid, result.user.displayName, result.user.email);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };


  const emailExists = email => {
    auth
      .signInWithEmailAndPassword(email, 'some-random-password')  // Password should be really long to avoid actually logging in :)
      .then((response) => {
        // TODO : Avoid this block
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          console.log('Exists!');

        }

        if (error.code === 'auth/user-not-found') {
          console.log('No such email registered! Add password then to create account!');

        }

        console.log(error);
      })
  }

  const checkEmailVerifiedAndShowPopup = () => {
    if (!auth.currentUser.emailVerified) {
      setShowPopup(true)
    }
  };

  const signUpWithEmailAndPassword = (name, email, password, successFunc = null, errFunc = null) => {
    // [START auth_signup_password]
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        const uid = result.user.uid;
        writeUserDataToDB(uid, name, email);
        sendVerificationEmail(result.user);
        console.log(firebase.auth().currentUser);
        auth.currentUser.updateProfile({displayName: name});
        localStorage.setItem(LS_USERNAME, JSON.stringify(name));
        checkEmailVerifiedAndShowPopup();
        return true;
      })
      .catch((error) => {
        if (errFunc) {
          errFunc(error.code);
        }
      });
    // [END auth_signup_password]
  }

  const signInWithEmailAndPassword = (email, password, errFunc = null) => {
    // [START auth_signin_password]
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        checkEmailVerifiedAndShowPopup();
        localStorage.setItem(LS_USERNAME, JSON.stringify(auth.currentUser.displayName));
      })
      .catch((error) => {
        if (errFunc) {
          errFunc(error.code);
        }
      });
    // [END auth_signin_password]
  }

  const logout = () => {
    return auth
      .signOut()
      .then(() => {
        setUser(null);
        setName("");
        localStorage.removeItem(LS_USERNAME);
      });
  };

  const resetEmail = (email, errFunc = null, successFunc = null) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        if (successFunc) {
          successFunc();
        }
      })
      .catch((error) => {

        if (errFunc) {
          errFunc(error.code);
        }

      });
  };


  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any component that utilizes this hook to re-render with the latest auth object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLoading(false);
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const values = {
    auth,
    user,
    name,
    showPopup, setShowPopup,
    signInWithGoogle,
    signInWithEmailAndPassword,
    writeUserDataToDB,
    emailExists,
    signUpWithEmailAndPassword,
    logout,
    resetEmail,
    fdb,
    writeDataToDB,
    deleteRefFromDB,
    setSliderParams,
    setSliderStartParams,
    updateReduxData,
    setSlidersStartParams
  }

  return (
    <FirebaseContext.Provider value={values}>
      {!isLoading && children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
export {useFirebase, auth, LS_USERNAME, MAIN_REF};
