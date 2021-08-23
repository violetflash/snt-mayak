import React from 'react';
import Logo from '../Logo/';
import { Link } from "react-router-dom";

import ThemeSwitcher from "./ThemeSwitcher/";

import s from './Header.module.scss';
import { useAuth } from "../../context/AuthProvider/AuthProvider";

const Header = () => {
    const { user } = useAuth();
    console.log(user);

    const ActiveUser = user ? <h2>{user.email}</h2> : null;
    const Login = user ? null : <Link className={s.Header__login} to="/login"><span>Войти</span></Link>;

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
