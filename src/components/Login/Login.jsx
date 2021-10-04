import React from 'react';
import { useSelector } from "react-redux";

import { addConditionedStyle } from '../../functions/functions';
import LoginPopup from "./LoginPopup/";
import s from './Login.module.scss';

const Login = () => {

    const { authPopupIsOpened } = useSelector(state => state.authPopup);
    console.log(authPopupIsOpened);

    const LoginClass = addConditionedStyle(authPopupIsOpened, [s.Login], s.opened)

    return (
        <section className={LoginClass.join(' ')}>
            <LoginPopup />
        </section>
    )
};

export default Login;
