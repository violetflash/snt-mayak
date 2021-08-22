import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css'

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
    measurementId: process.envREACT_APP_FB_MEASUREMENT
});

const database = firebase.database();

const AuthContext = createContext();

//Hook for child components to get the auth object and re-render when it changes
const useAuth = () => {
    return useContext(AuthContext);
};


//Functions
const createUserWithEmailAndPassword = () => {

};

//Provider hook that creates auth object and handles state
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(null);

    //Wrap any firebase methods we want to use
    const createUserWithEmailAndPassword = (email, password) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUser(user);
                return true;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const writeUserDataToDB = (userId, name, email, imageUrl) => {
        database.ref(`${MAIN_REF}/users/` + userId).set({
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }

    const values = {
        user,
        isAuthenticating,
        createUserWithEmailAndPassword,
        writeUserDataToDB,
    }

    return (
        <AuthContext.Provider value={values}>
            {!isAuthenticating && children}
        </AuthContext.Provider>
    )
};

export { useAuth };