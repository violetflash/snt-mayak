import React from 'react';
import { Link } from "react-router-dom";

import s from './Nav.module.scss';

const Nav = () => {
    const linksData = [
        {title: "Главная", route: "/main"},
        {title: "Информация о СНТ", route: "/about"},
        {title: "Документы СНТ", route: "/documents"},
        {title: "Платежи, взносы", route: "/payments"},
        {title: "Контакты", route: "/contacts"}
    ];

    const links = linksData.map((link) => (
        <Link
            className={s.Nav__link}
            to={link.route}
            key={link.title}
        >
            {link.title}
        </Link>
    ));
    return (
        <nav className={s.Nav}>
            {links}
        </nav>

    );
};

export default Nav;