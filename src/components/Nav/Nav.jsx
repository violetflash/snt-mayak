import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { addConditionedStyle } from "../../functions/functions";

import s from './Nav.module.scss';

const Nav = () => {
    const [activeLink, setActiveLink] = useState(0)

    const linksData = [
        {id: 0, title: "Главная", route: "/main"},
        {id: 1, title: "Информация о СНТ", route: "/about"},
        {id: 2, title: "Документы СНТ", route: "/documents"},
        {id: 3, title: "Платежи, взносы", route: "/payments"},
        {id: 4, title: "Объявления", route: "/offers"},
        {id: 5, title: "Контакты", route: "/contacts"}
    ];

    const linkHandler = (id) => {
        setActiveLink(id);
    };

    const links = linksData.map((link) => {
        const { id, route, title } = link;
        const style = addConditionedStyle(activeLink === id, [s.Nav__link], s.active);
        return (
            <Link
                className={style.join(' ')}
                key={id}
                to={route}
                onClick={() => linkHandler(id)}
            >
                {title}
            </Link>
        )
    });

    return (
        <section className={s.Nav}>
            <div className="container">
                <nav className={s.Nav__nav}>
                    {links}
                </nav>
            </div>
        </section>
    );
};

export default Nav;
