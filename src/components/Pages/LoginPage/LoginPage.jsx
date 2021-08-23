import React, { useState } from 'react';

import { useAuth } from "../../../context/AuthProvider/AuthProvider";

import s from './LoginPage.module.scss';

const LoginPage = () => {
    const { signUpWithEmailPassword, logout, emailExists, signInWithEmailAndPassword } = useAuth();
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
        signUpWithEmailPassword(email, password);
    };

    const checkEmailHandler = (email) => {
        console.log(emailExists(email))
    };

    const login = () => {
        signInWithEmailAndPassword(email, password);
    };

    return (
        <section className={s.Login}>
            <div className="container">
                <div className={s.Login__content}>
                    Login
                    <div><input type="text" placeholder="name" name="name" value={name} onChange={inputHandler}/></div>
                    <div><input type="text" placeholder="email" name="email" value={email} onChange={inputHandler}/></div>
                    <div><input type="text" placeholder="password" name="password" value={password} onChange={inputHandler}/></div>
                    <div><div><button onClick={login}>Login</button></div></div>
                    <div><button onClick={registerUser}>Зарегистрировать</button></div>
                    <div><button onClick={logout}>Logout</button></div>
                    <div><button onClick={checkEmailHandler}>CheckEmailExist</button></div>
                </div>
            </div>
        </section>
    )
};

export default LoginPage;
