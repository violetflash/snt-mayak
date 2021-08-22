import React from 'react';

import Logo from '../Logo/';

import s from './Header.module.scss';
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
    return (
        <header className={s.Header}>
            <div className="container">
                <div className={s.Header__content}>
                    <Logo />
                    <ThemeSwitcher />
                </div>
            </div>

        </header>
    );

};

export default Header;
