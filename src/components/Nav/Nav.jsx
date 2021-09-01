import React, { useContext } from 'react';

import Context from '../../context/context';
import { Link } from "react-router-dom";
import { addConditionedStyle } from "../../functions/functions";

import s from './Nav.module.scss';

const Nav = () => {
    const {
        activeLink, setActiveLink,
        menuOpened, setMenuOpened
    } = useContext(Context);

    const linksData = [
        {id: 0, title: "Главная", route: "/main"},
        {id: 1, title: "О СНТ", route: "/about"},
        {id: 2, title: "Документы", route: "/documents"},
        {id: 3, title: "Платежи, взносы", route: "/payments"},
        {id: 4, title: "Объявления", route: "/offers"},
        {id: 5, title: "Контакты", route: "/contacts"}
    ];

    const linkHandler = (id) => {
        setActiveLink(id);

        if (menuOpened) {
            setMenuOpened(false);
        }
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
                data-alt={title}
            >
                <span>{title}</span>
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
