import React, { useContext } from 'react';

import Context from '../../context/context';
import { addConditionedStyle } from '../../functions/functions';
import LoginPopup from "./LoginPopup/";
import s from './Login.module.scss';

const Login = () => {

    const { loginIsOpened } = useContext(Context);

    const LoginClass = addConditionedStyle(loginIsOpened, [s.Login], s.opened)

    return (
        <section className={LoginClass.join(' ')}>
            <LoginPopup />
        </section>
    )
};

export default Login;
