import React, { useContext } from 'react';
import Logo from '../Logo/';
import Context from '../../context/context';
import { ReactComponent as Trash } from "../Header/ThemeSwitcher/icons/trash.svg";
// import styled from 'styled-components';

import ThemeSwitcher from "./ThemeSwitcher/";
import Info from "./Info/";
// import Loader from "../Loader/";

import User from './User/'
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import s from './Header.module.scss';
// import { ReactComponent } from "*.svg";



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
                    <Info />
                    {login}
                </div>
            </div>

        </header>
    );

};

export default Header;
