import React from 'react';
import { useSelector } from "react-redux";

import { addConditionedStyle } from '../../functions/functions';
import LoginPopup from "./LoginPopup/";
import s from './Login.module.scss';

const Login = () => {
    const { authPopupIsOpened } = useSelector(state => state.authPopup);
    const loginClass = addConditionedStyle(authPopupIsOpened === true, [s.Login], s.opened);

    return (
        <section className={loginClass.join(' ')}>
            <LoginPopup />
        </section>
    );
};

export default Login;
