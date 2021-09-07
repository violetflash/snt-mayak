import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const MAIN_REF = "mayak";

//Initialize Firebase
if  (!firebase.apps.length) {
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


const AuthContext = createContext();

//Hook for child components to get the auth object and re-render when it changes
const useAuth = () => {
    return useContext(AuthContext);
};

const auth = firebase.auth();
const fdb = firebase.database();

const LS_USERNAME = 'mayak-activeUser';

//Provider hook that creates auth object and handles state
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    //Wrap any firebase methods we want to use
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

    const writeNewsDataToDB = (userId, title, desc, date, time) => {
        if (!title || !desc || !date || !time) return;
        const now = Date.now();
        const ref = `${title}-${now}`;
        fdb.ref(`${MAIN_REF}/news/` + ref)
            .set({
                title,
                desc,
                date,
                time,
                author: userId,
                id: now
            })
            .catch((error) => {
                console.error(error);
            });
    }

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
        firebase.auth().signInWithPopup(provider)
            .then((result) =>{
                setUser(result.user);
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    };


    const emailExists = email => {
        firebase.auth()
            .signInWithEmailAndPassword(email, 'some-random-password')  // Password should be really long to avoid actually logging in :)
            .then((response) => {
                // TODO : Avoid this block
            })
            .catch((error) => {
                if(error.code === 'auth/wrong-password'){
                    console.log('Exists!');

                }

                if(error.code === 'auth/user-not-found'){
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
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result => {
                const uid = result.user.uid;
                writeUserDataToDB(uid, name, email);
                sendVerificationEmail(result.user);
                console.log(firebase.auth().currentUser);
                auth.currentUser.updateProfile({ displayName: name });
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
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                checkEmailVerifiedAndShowPopup();
            })
            .catch((error) => {
                if (errFunc) {
                    errFunc(error.code);
                }
            });
        // [END auth_signin_password]
    }

    const logout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(null);
                setName("");
            });
    };

    const resetEmail = (email, errFunc = null, successFunc = null) => {
        firebase.auth()
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
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setIsLoading(false);
            setUser(user);
            // if (name) {
            //     user.updateProfile({
            //         displayName: name,
            //     }).then(() => setUser(user));
            // }

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
        writeNewsDataToDB
    }

    return (
        <AuthContext.Provider value={values}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export { useAuth, auth, LS_USERNAME, MAIN_REF };
