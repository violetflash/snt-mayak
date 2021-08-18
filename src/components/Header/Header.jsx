import React from 'react';

import Logo from '../Logo/';
import Nav from './Nav/';

import s from './Header.module.scss';

const Header = () => {
    return (
        <header className={s.Header}>
            <div className="container">

                <div className={s.Header__content}>
                    <Logo />
                    <Nav />
                </div>
            </div>
        </header>
    );

};

export default Header;
