import React from 'react';
import Logo from '../Logo/';
import { Link } from "react-router-dom";

import ThemeSwitcher from "./ThemeSwitcher/";
// import Loader from "../Loader/";

import s from './Header.module.scss';
import { useAuth } from "../../context/AuthProvider/AuthProvider";

const Header = () => {
    const { user, name, logout } = useAuth();
    // console.log(user);


    const ActiveUser = user?.displayName ? <h2>{user.displayName}</h2> :
        user ? <h2>{name}</h2> : null;
    const logoutBtn = <button onClick={logout}>Выйти</button>
    const Login = user ? logoutBtn : <Link className={s.Header__login} to="/login"><span>Войти</span></Link>;

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
