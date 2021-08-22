import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import firebaseui from "firebaseui";

const MAIN_REF = "main";

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

// Get a reference to the database service
const database = firebase.database();
const auth = firebase.auth();
// const ui = new firebaseui.auth.AuthUI(auth);

// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//         firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
// });


//FIREBASE FUNCTIONS
const writeUserData = (database, userId, name, email, imageUrl) => {
    database.ref(`${MAIN_REF}/users/` + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}

export {
    database,
    auth,
    writeUserData
};