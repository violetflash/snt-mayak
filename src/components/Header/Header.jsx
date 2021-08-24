import React, { useContext } from 'react';
import Logo from '../Logo/';
import Context from '../../context/context';

import ThemeSwitcher from "./ThemeSwitcher/";
// import Loader from "../Loader/";

import s from './Header.module.scss';
import { useAuth } from "../../context/AuthProvider/AuthProvider";

const Header = () => {
    const { user, name, logout } = useAuth();
    const { setLoginIsOpened } = useContext(Context);
    const openLogin = () => {
        setLoginIsOpened(true);
    };

    const ActiveUser = user?.displayName ? <h2>{user.displayName}</h2> :
        user ? <h2>{name}</h2> : null;
    const logoutBtn = <button onClick={logout}>Выйти</button>
    const Login = user ? logoutBtn : <button className={s.Header__login} onClick={openLogin}><span>Войти</span></button>;

    return (
        <header className={s.Header}>
            <div className="container">
                <div className={s.Header__content}>
                    <Logo />
                    <ThemeSwitcher />
                    {ActiveUser}
                    {Login}
                </div>
            </div>

        </header>
    );

};

export default Header;
