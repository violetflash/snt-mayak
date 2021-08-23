import React, { useState } from 'react';

import { useAuth } from "../../../context/AuthProvider/AuthProvider";

import s from './LoginPage.module.scss';

const LoginPage = () => {
    const {
        signUpWithEmailPassword,
        logout,
        emailExists,
        signInWithEmailAndPassword
    } = useAuth();

    const [isGoogleAuth, setIsGoogleAuth] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const inputHandler = (e) => {
        const target = e.target;

        if (target.name === 'name') {
            setName(target.value);
            return;
        }

        if (target.name === 'email') {
            setEmail(target.value);
            return;
        }

        if (target.name === 'password') {
            setPassword(target.value);
        }
    };

    const registerUser = () => {
        signUpWithEmailPassword(name, email, password);
    };

    const checkEmailHandler = () => {
        emailExists(email);
    };

    const login = () => {
        signInWithEmailAndPassword(email, password);
    };

    const setByGoogle = () => {
        setIsGoogleAuth(true);
    };

    const setByEmail = () => {

    };

    const byEmail = <div>
        <div><input type="text" placeholder="name" name="name" value={name} onChange={inputHandler}/></div>
        <div><input type="text" placeholder="email" name="email" value={email} onChange={inputHandler}/></div>
        <div><input type="text" placeholder="password" name="password" value={password} onChange={inputHandler}/></div>
        <div><div><button onClick={login}>Login</button></div></div>
        <div><button onClick={registerUser}>Зарегистрировать</button></div>
        <div><button onClick={logout}>Logout</button></div>
        <div><button onClick={checkEmailHandler}>CheckEmailExist</button></div>
    </div>;

    return (
        <section className={s.Login}>
            <div className="container">
                <div className={s.Login__content}>
                    Login
                    {!isGoogleAuth && <button onClick={setByEmail}>Войти по адресу электр. почты</button>}
                    <button onClick={setByGoogle}>Войти, используя Google аккаунт </button>
                </div>
            </div>
        </section>
    )
};

export default LoginPage;
