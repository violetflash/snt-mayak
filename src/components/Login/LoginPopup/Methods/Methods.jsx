import React, {useEffect, useState} from 'react';

import s from './Methods.module.scss';
import {useAuth} from "../../../../context/AuthProvider/AuthProvider";
import { addConditionedStyle, capitalizer } from "../../../../functions/functions";

const Methods = ({ activeTab, loginIsOpened }) => {

    const {
        signUpWithEmailPassword,
        logout,
        emailExists,
        error,
        signInWithEmailAndPassword
    } = useAuth();

    // const [isGoogleAuth, setIsGoogleAuth] = useState(false);

    //inputs hooks
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //errors hooks
    const [errors, setErrors] = useState(new Set([]));
    const [errorMessage, setErrorMessage] = useState(null);
    // const [emailErrorDesc, setEmailErrorDesc] = useState(null);
    // const [passwordErrorDesc, setPasswordErrorDesc] = useState(null);

    //ошибки в результате отправки на сервер аутентификации
    // useEffect(() => {
    //
    //     const handleErrors = () => {
    //         if (error === 'auth/user-not-found') {
    //             setEmailErrorDesc('Нет такого пользователя');
    //         } else if (error === 'auth/wrong-password') {
    //             setPasswordErrorDesc('Неправильный пароль');
    //         }
    //     };
    //     handleErrors();
    //
    // }, [error, emailErrorDesc, passwordErrorDesc]);


    const submitForm = (e) => {
        e.preventDefault();

        if (errors.size) return;

        if (!email || !password) {
            setErrorMessage("Заполните все поля формы")
            return;
        }

        if (e.target.name === 'signIn') {
            console.log('форма входа');

            signInWithEmailAndPassword(email, password, (err) => {
                if (err.code === "auth/wrong-password") {
                    setErrorMessage(() => {
                        return "Неправильный пароль";
                    });
                    return;
                }

                if (err.code === 'auth/user-not-found') {
                    setErrorMessage(() => {
                        return "Нет такого пользователя";
                    });
                    return;
                }
            });
        } else {
            console.log('форма регистрации');
        }


        // console.log("Успешно");
    };

    const inputHandler = (e) => {
        const target = e.target;
        setErrorMessage(null);


        if (target.name === "email") {
            console.log('hit');
            target.value = target.value.replace(/\s/, '').replace(/./gi, match => match.toLowerCase());
            setEmail(target.value);
        }

        if (target.name === "password") {
            const newSet = new Set([...errors]);
            newSet.delete('password');
            setErrors(newSet);
            setPassword(target.value);
        }

        if (target.name === "name") {
            const nameValue = target.value
                .replace(/^[\s|-]/gi, '')
                .replace(/[^a-zA-Zа-яА-Я- ]/gi, '')
                .replace(/\s{2}/gi, ' ')
                .replace(/-{2}/gi, '-')
                .replace(/(?<=-)\s/gi, '')
                .replace(/(?<=\s)-/gi, '')
                .replace(/./gi, match => match.toLowerCase())
                .replace(/^./gi, match => capitalizer(match))
                .replace(/(?<=\s)[a-zA-Zа-яА-Я]/gi, match => capitalizer(match))
                .replace(/(?<=-)[a-zA-Zа-яА-Я]/gi, match => capitalizer(match))
            ;
            setName(nameValue);
        }

        if (target.name === "confirmPassword") {
            setConfirmPassword(target.value);
        }
    };

    const validateNameOnBlur = (e) => {

        if ( (!e.target.value && errors.has("name")) || (e.target.value.length > 2 && errors.has("name")) ) {
            const newSet = new Set([...errors]);
            newSet.delete('name');
            setErrors(newSet);
            return;
        }

        if (!e.target.value) {
            return;
        }

        if (e.target.value.length < 2) {
            setErrors(() => {
                return new Set([...errors, "name"]);
            });
        }
    };

    const validateEmail = (e) => {
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( (!e.target.value && errors.has("email")) || (reg.test(email) && errors.has("email")) ) {
            const newSet = new Set([...errors]);
            newSet.delete('email');
            setErrors(newSet);
            return;
        }

        if (!e.target.value) {
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
    const emailNotifier = addConditionedStyle(emailError, [s.Methods__notifyError], s.active);

    const nameError = errors.has('name');
    const nameNotifier = addConditionedStyle(nameError, [s.Methods__notifyError], s.active);

    const errorMessageClass = addConditionedStyle(errorMessage, [s.Methods__errorMessage], s.active);

    const signIn =
        <div>
            <span className={errorMessageClass.join(' ')}>{errorMessage}</span>
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
                    <span className={emailNotifier.join(' ')}>Некорректный email</span>
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
                    onChange={inputHandler}
                    onBlur={validateNameOnBlur}
                />
                <span className={nameNotifier.join(' ')}>Не меньше 3-х букв в имени</span>
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
                <span className={emailNotifier.join(' ')}>Некорректный email</span>
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
