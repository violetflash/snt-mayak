import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const MAIN_REF = "main";

//Initialize Firebase
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

const AuthContext = createContext();
console.log(firebase.apps.length);

//Hook for child components to get the auth object and re-render when it changes
const useAuth = () => {
    return useContext(AuthContext);
};

//Provider hook that creates auth object and handles state
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(null);
    const [name, setName] = useState(null);

    //Wrap any firebase methods we want to use
    const writeUserDataToDB = (userId, name, email) => {
        firebase.database().ref(`${MAIN_REF}/users/`)
            .get()
            .then((snapshot) => {
                firebase.database()
                    .ref(`${MAIN_REF}/users/` + userId)
                    .set({
                        userId,
                        username: name,
                        email
                    });
            })
            .catch((error) => {
                console.error(error);
            });

    }


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

    const signUpWithEmailPassword = (name, email, password) => {
        setName(name);
        // [START auth_signup_password]
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result => {
                const uid = result.user.uid;
                writeUserDataToDB(uid, name, email);
                setName(name);
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        user.updateProfile({
                            displayName: name,
                        }).then(() => {
                            // setUser(user);
                        }).catch((error) => {
                            // An error occurred
                            // ...
                        });
                    } else {
                        // User is signed out
                        // ...
                    }
                });

                return true;
            })
            .then(result => {

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        // [END auth_signup_password]
    }

    const signInWithEmailAndPassword = (email, password) => {
        // [START auth_signin_password]
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                setUser(result.user);
                console.log(user);
                return true;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        // [END auth_signin_password]
    }

    const logout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(null);
            });
    };

    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any component that utilizes this hook to re-render with the latest auth object.
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user);
            setIsAuthenticating(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const values = {
        user,
        name,
        isAuthenticating,
        signInWithEmailAndPassword,
        writeUserDataToDB,
        emailExists,
        signUpWithEmailPassword,
        logout,
    }

    return (
        <AuthContext.Provider value={values}>
            {!isAuthenticating && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export { useAuth };
