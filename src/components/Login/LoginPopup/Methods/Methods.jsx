import React, { useEffect, useState } from 'react';

import { useAuth } from "../../../../context/AuthProvider/AuthProvider";
import useFocus from '../../../../hooks/useFocus/useFocus';
import { addConditionedStyle, capitalizer } from "../../../../functions/functions";

import s from './Methods.module.scss';

const Methods = ({ activeTab, setActiveTab, loginIsOpened, setLoginIsOpened }) => {

    const {
        signUpWithEmailAndPassword,
        user,
        signInWithGoogle,
        signInWithEmailAndPassword,
        resetEmail
    } = useAuth();

    const { htmlElRef, setFocus } = useFocus();






    // const [isGoogleAuth, setIsGoogleAuth] = useState(false);

    //inputs hooks
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //messages hooks
    const [errors, setErrors] = useState(new Set([])); //validation errors hook
    const [errorMessage, setErrorMessage] = useState(null); //firebase auth errors hook
    const [notifier, setNotifier] = useState(null);

    //utility functions
    const resetInputs = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const resetNotifier = () => {
        setNotifier(null);
        setErrorMessage(null);
    };

    const checkErrAndSetErrMsg = (msg) => {
        if (msg === "auth/wrong-password") {
            setErrorMessage("Неправильный пароль");
            return;
        }

        if (msg === 'auth/user-not-found') {
            setErrorMessage("Данный email не зарегистрирован.");
            return;
        }

        if (msg === 'auth/too-many-requests') {
            setErrorMessage("Аккаунт временно заблокирован. Попробуйте позже или смените пароль.");
            return;
        }

        if (msg === 'auth/email-already-in-use') {
            setErrorMessage("Такой email уже зарегистрирован.");
            return;
        }

    };

    //instructions
    useEffect(() => {
        if (user) {
            setLoginIsOpened(false);
        }
        setFocus();
        resetInputs();
        resetNotifier();
        setErrors(new Set([]));
    }, [user, setLoginIsOpened, activeTab, loginIsOpened]);

    //handlers
    const submitForm = (e) => {
        e.preventDefault();


        if (errors.size) return;

        if (!email || !password) {
            setErrorMessage("Заполните все поля формы");
            return;
        }


        if (activeTab === 'login') {
            signInWithEmailAndPassword(email, password, (msg) => checkErrAndSetErrMsg(msg));
            return;
        }

        if (activeTab === 'register') {
            if (password !== confirmPassword) {
                setErrorMessage("Пароли не совпадают");
                return;
            }
            signUpWithEmailAndPassword(name, email, password, (msg) => checkErrAndSetErrMsg(msg));
            // setIsLoading(true);
            // console.log(isLoading);
            // signInWithEmailAndPassword(email, password, (msg) => checkErrAndSetErrMsg(msg));
            // setIsLoading(false);
        }
    };

    const inputHandler = (e) => {
        const target = e.target;
        setErrorMessage(null);
        setNotifier(null);


        if (target.name === "email") {
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

        if ((!e.target.value && errors.has("name")) || (e.target.value.length > 2 && errors.has("name"))) {
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

        if ((!e.target.value && errors.has("email")) || (reg.test(email) && errors.has("email"))) {
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

    const openResetForm = () => {
        setActiveTab('recovery');
    };

    const resetHandler = (e) => {
        e.preventDefault();

        setErrorMessage(null);

        if (!email) {
            setErrorMessage("Введите email");
            return;
        }

        resetEmail(email, (msg) => checkErrAndSetErrMsg(msg), () => {
            setNotifier("Инструкция для сброса пароля успешно отправлена.");
            setEmail("");
        });
    };

    const logInWithGoogle = () => {
        signInWithGoogle();
    };

    //classes/states
    const emailError = errors.has('email');
    const emailClass = addConditionedStyle(emailError, [s.Methods__input], s.hasError);
    const emailNotifier = addConditionedStyle(emailError, [s.Methods__notifyError], s.active);

    const nameError = errors.has('name');
    const nameNotifier = addConditionedStyle(nameError, [s.Methods__notifyError], s.active);

    const errorMessageClass = addConditionedStyle(errorMessage, [s.Methods__errorMessage], s.showNotify);
    const successMessageClass = addConditionedStyle(notifier, [s.Methods__successMsg], s.showNotify);

    const errorMessageNotifier = <span className={errorMessageClass.join(' ')}>{errorMessage}</span>;
    const successMessage = <span className={successMessageClass.join(' ')}>{notifier}</span>;

    const logInDisabled = errors.size || !email || !password;
    const registerDisabled = errors.size || !email || !password || !confirmPassword || !name;
    const recoveryDisabled = errors.size || !email || notifier;

    const signIn =
        <>
            <div className={s.Methods__notifier}>
                {errorMessageNotifier}
                {successMessage}
            </div>
            <form name="signIn" onSubmit={submitForm}>
                <label className={s.Methods__label}>
                    <span>Email:</span>
                    <input
                        className={emailClass.join(' ')}
                        value={email}
                        name="email"
                        type="text"
                        onBlur={validateEmail}
                        onChange={inputHandler}
                        ref={htmlElRef}
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
                    <button className={s.Methods__forgot} onClick={openResetForm}>Забыли пароль?</button>
                </label>

                <button className={s.Methods__submit} disabled={logInDisabled}>Войти</button>
            </form>
            <button className={s.Methods__byGoogle} onClick={logInWithGoogle}>Или войти через Google</button>
        </>
    ;

    const signUp =
        <>
            <div className={s.Methods__notifier}>
                <span className={errorMessageClass.join(' ')}>{errorMessage}</span>
            </div>
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
                    <span>Email:</span>
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
                <button className={s.Methods__submit} disabled={registerDisabled}>Зарегистрировать</button>
            </form>
        </>
    ;

    const resetPassword =
        <>
            <div className={s.Methods__notifier}>
                {errorMessageNotifier}
                {successMessage}
            </div>
            <form onSubmit={resetHandler}>
                <label className={s.Methods__label}>
                    <span>Ваш email:</span>
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
                <button className={s.Methods__submit} disabled={recoveryDisabled}>Восстановить</button>
            </form>
        </>
    ;


    const method = activeTab === 'login' ? signIn :
        activeTab === 'register' ? signUp :
            activeTab === 'recovery' ? resetPassword : null;

    return (
        <>
            {method}
        </>
    );
};

export default Methods;
