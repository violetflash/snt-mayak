import React, { useState } from 'react';

import s from './Methods.module.scss';
import { useAuth } from "../../../../context/AuthProvider/AuthProvider";

const Methods = ({ activeTab }) => {

    const {
        signUpWithEmailPassword,
        logout,
        emailExists,
        signInWithEmailAndPassword
    } = useAuth();

    // const [isGoogleAuth, setIsGoogleAuth] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target.name);
    };

    const inputHandler = (e) => {
        const target = e.target;

        if (target.name === "email") {
            setEmail(target.value);
        }

        if (target.name === "password") {
            setPassword(target.value);
        }
    };

    const signIn =
        <div>
            <form name="signIn" onSubmit={submitForm}>
                <label className={s.Methods__label}>
                    <span>Эл. почта:</span>
                    <input
                        className={s.Methods__input}
                        value={email}
                        name="email"
                        type="text"
                        onChange={inputHandler}/>
                </label>
                <label className={s.Methods__label}>
                    <span>Пароль:</span>
                    <input
                        className={s.Methods__input}
                        value={password}
                        name="password"
                        type="password"
                        onChange={inputHandler}/>
                    <button className={s.Methods__forgot}>Забыли пароль?</button>
                </label>

                <button className={s.Methods__submit}>Войти</button>
            </form>
            <button className={s.Methods__byGoogle}>Или войти через Google</button>
        </div>

    const signUp =
        <div>
            <form name="signUp" onSubmit={submitForm}>
                <label className={s.Methods__label}>
                    <span>Ваше имя:</span>
                    <input
                        className={s.Methods__input}
                        value={name}
                        name="name"
                        type="text"/>
                </label>
                <label className={s.Methods__label}>
                    <span>Эл. почта:</span>
                    <input
                        className={s.Methods__input}
                        value={email}
                        name="email"
                        type="text"/>
                </label>
                <label className={s.Methods__label}>
                    <span>Пароль:</span>
                    <input
                        className={s.Methods__input}
                        value={password}
                        name="password"
                        type="password"/>
                </label>
                <label className={s.Methods__label}>
                    <span>Подтверждение пароля:</span>
                    <input
                        className={s.Methods__input}
                        value={confirmPassword}
                        name="confirmPassword"
                        type="password"/>
                </label>

                <button className={s.Methods__submit}>Зарегистрировать</button>
            </form>
        </div>

    const method = activeTab === 'login' ? signIn : signUp;

    return (
        <div className={s.Methods}>
            {method}
        </div>
    );

};

export default Methods;
