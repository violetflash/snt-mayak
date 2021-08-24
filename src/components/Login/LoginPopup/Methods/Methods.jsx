import React, {useEffect, useState} from 'react';

import s from './Methods.module.scss';
import {useAuth} from "../../../../context/AuthProvider/AuthProvider";
import {addConditionedStyle} from "../../../../functions/functions";

const Methods = ({ activeTab, loginIsOpened }) => {

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
    const [errors, setErrors] = useState(new Set([]));

    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target.name);
    };

    const inputHandler = (e) => {
        const target = e.target;

        if (target.name === "email") {
            target.value = target.value.replace(/\s/, '');
            setEmail(target.value);
        }

        if (target.name === "password") {
            setPassword(target.value);
        }

        if (target.name === "name") {
            setName(target.value);
        }

        if (target.name === "confirmPassword") {
            setConfirmPassword(target.value);
        }
    };

    const validateEmail = (e) => {
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!e.target.value && errors.has("email")) {
            const newSet = new Set([...errors]);
            newSet.delete('email');
            setErrors(newSet);
            return;
        }

        if (!e.target.value) {
            return;
        }

        if (reg.test(email) && errors.has("email")) {
            const newSet = new Set([...errors]);
            newSet.delete('email');
            setErrors(newSet);
            return;
        }

        if (reg.test(email)) {
            return;
        }

        setErrors(() => {
            return new Set([...errors, "email"]);
        });
    };

    //classes
    const emailError = errors.has('email');
    const emailClass = addConditionedStyle(emailError, [s.Methods__input], s.hasError);
    const emailNotifier = addConditionedStyle(emailError, [s.Methods__emailError], s.active);

    const signIn =
        <div>
            <form name="signIn" onSubmit={submitForm}>
                <label className={s.Methods__label}>
                    <span>Эл. почта:</span>
                    <input
                        className={emailClass.join(' ')}
                        value={email}
                        name="email"
                        type="text"
                        onBlur={validateEmail}
                        onChange={inputHandler}
                    />
                    <span className={emailNotifier.join(' ')}>Некорректный формат email</span>
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
        <form name="signUp" onSubmit={submitForm}>
            <label className={s.Methods__label}>
                <span>Ваше имя:</span>
                <input
                    className={s.Methods__input}
                    value={name}
                    name="name"
                    type="text"
                    onChange={inputHandler}/>
            </label>
            <label className={s.Methods__label}>
                <span>Эл. почта:</span>
                <input
                    className={emailClass.join(' ')}
                    value={email}
                    name="email"
                    type="text"
                    onBlur={validateEmail}
                    onChange={inputHandler}
                />
                <span className={emailNotifier.join(' ')}>Некорректный формат email</span>
            </label>
            <label className={s.Methods__label}>
                <span>Пароль:</span>
                <input
                    className={s.Methods__input}
                    value={password}
                    name="password"
                    type="password"
                    onChange={inputHandler}/>
            </label>
            <label className={s.Methods__label}>
                <span>Подтверждение пароля:</span>
                <input
                    className={s.Methods__input}
                    value={confirmPassword}
                    name="confirmPassword"
                    type="password"
                    onChange={inputHandler}/>
            </label>

            <button className={s.Methods__submit}>Зарегистрировать</button>
        </form>

    const method = activeTab === 'login' ? signIn : signUp;

    return (
        <div className={s.Methods}>
            {method}
        </div>
    );

};

export default Methods;
