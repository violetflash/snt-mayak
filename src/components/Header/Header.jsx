import React from 'react';
import { useDispatch } from 'react-redux';

import { openAuthPopup } from "../../redux";
import Logo from '../Logo/';

import ThemeSwitcher from "./ThemeSwitcher/";
import Info from "./Info/";

import User from './User/';
import { useFirebase } from "../../context/FirebaseProvider/FirebaseProvider";
import s from './Header.module.scss';

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useFirebase();

    const openLogin = () => {
        dispatch(openAuthPopup());
    };


    const logInBtn = <button className={s.Header__login} onClick={openLogin}><span>Войти</span></button>;
    const login = user ? <User /> : logInBtn;

    return (
        <header className={s.Header}>
            <div className="container">
                <div className={s.Header__content}>
                    <Logo />
                    <Info />
                    <ThemeSwitcher />
                    {login}
                </div>
            </div>

        </header>
    );

};

export default Header;
