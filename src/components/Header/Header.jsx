import React from 'react';

import Logo from '../Logo/';

import s from './Header.module.scss';
import ThemeSwitcher from "./ThemeSwitcher";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.Header}>
            <div className="container">
                <div className={s.Header__content}>
                    <Logo />
                    <ThemeSwitcher />
                    <Link className={s.Header__login} to="/login"><span>Войти</span></Link>
                </div>
            </div>

        </header>
    );

};

export default Header;
