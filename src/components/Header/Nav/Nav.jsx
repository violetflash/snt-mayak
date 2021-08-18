import React from 'react';

import s from './Nav.module.scss';

const Nav = () => {
    const titles = ['Главная', 'Информация о СНТ', 'Документы СНТ', 'Платежи, взносы', 'Контакты'];

    const links = titles.map((title) => <a className={s.Nav__link} href="#" key={title}>{title}</a>);
    return (
        <nav className={s.Nav}>
            {links}
        </nav>
    );

};

export default Nav;
