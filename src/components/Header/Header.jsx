import React, { useContext } from 'react';
import Logo from '../Logo/';
import Context from '../../context/context';

import ThemeSwitcher from "./ThemeSwitcher/";
// import Loader from "../Loader/";

import User from './User/'
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import s from './Header.module.scss';

const Header = () => {
    const { user } = useAuth();
    const { setLoginIsOpened } = useContext(Context);

    const openLogin = () => {
        setLoginIsOpened(true);
    };


    const logInBtn = <button className={s.Header__login} onClick={openLogin}><span>Войти</span></button>;
    const login = user ? <User /> : logInBtn;

    return (
        <header className={s.Header}>
            <div className="container">
                <div className={s.Header__content}>
                    <Logo />
                    <ThemeSwitcher />
                    {login}
                </div>
            </div>

        </header>
    );

};

export default Header;
