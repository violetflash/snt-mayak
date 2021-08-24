import React, { useContext } from 'react';

import Context from '../../context/context';
import { addConditionedStyle } from '../../functions/functions';
import LoginPopup from "./LoginPopup/";
import s from './Login.module.scss';

const Login = () => {


    const { loginIsOpened } = useContext(Context);



    // const inputHandler = (e) => {
    //     const target = e.target;
    //
    //     if (target.name === 'name') {
    //         setName(target.value);
    //         return;
    //     }
    //
    //     if (target.name === 'email') {
    //         setEmail(target.value);
    //         return;
    //     }
    //
    //     if (target.name === 'password') {
    //         setPassword(target.value);
    //     }
    // };
    //
    // const registerUser = () => {
    //     signUpWithEmailPassword(name, email, password);
    // };
    //
    // const checkEmailHandler = () => {
    //     emailExists(email);
    // };
    //
    // const login = () => {
    //     signInWithEmailAndPassword(email, password);
    // };
    //
    // const setByGoogle = () => {
    //     setIsGoogleAuth(true);
    // };
    //
    // const setByEmail = () => {
    //
    // };
    //
    // const byEmail = <div>
    //     <div><input type="text" placeholder="name" name="name" value={name} onChange={inputHandler}/></div>
    //     <div><input type="text" placeholder="email" name="email" value={email} onChange={inputHandler}/></div>
    //     <div><input type="text" placeholder="password" name="password" value={password} onChange={inputHandler}/></div>
    //     <div><div><button onClick={login}>Login</button></div></div>
    //     <div><button onClick={registerUser}>Зарегистрировать</button></div>
    //     <div><button onClick={logout}>Logout</button></div>
    //     <div><button onClick={checkEmailHandler}>CheckEmailExist</button></div>
    // </div>;

    const LoginClass = addConditionedStyle(loginIsOpened, [s.Login], s.opened)

    return (
        <section className={LoginClass.join(' ')}>
            <LoginPopup />
        </section>
    )
};

export default Login;
