import React from 'react';
import firebase from 'firebase/app';
import firebaseui from "firebaseui";
import 'firebaseui/dist/firebaseui.css'
import 'firebase/auth';


import s from './LoginPage.module.scss';

const ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
});

const LoginPage = () => {
    return (
        <section className={s.Login}>
            <div className="container">
                <div className={s.Login__content}>
                    Login
                </div>
            </div>
        </section>
    )
};

export default LoginPage;