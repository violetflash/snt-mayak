import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from 'firebase/app';
import 'firebase/auth';

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
})

const AuthContext = createContext();

// Hook for child components to get the auth object and re-render when it changes
const useAuth = () => {
    return useContext(AuthContext);
};

// Provider hook that creates auth object and handles state
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(null);

    const send
};