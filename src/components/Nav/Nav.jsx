import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveNavLink } from '../../redux';

import { Link } from "react-router-dom";
import {addConditionedStyle} from "../../functions/functions";

import s from './Nav.module.scss';

const Nav = () => {
  const dispatch = useDispatch();
  const { activeNavID } = useSelector(state => state.interface);

  const linksData = [
    {id: 0, title: "Главная", route: "/main"},
    {id: 1, title: "О снт, галерея", route: "/about"},
    {id: 2, title: "Документы", route: "/documents"},
    {id: 3, title: "Платежи, взносы", route: "/payments"},
    {id: 4, title: "Частные объявления", route: "/offers"},
    {id: 5, title: "Контакты", route: "/contacts"}
  ];

  const linkHandler = (id) => {
    dispatch(setActiveNavLink({ activeNavID: id }));
  };

  const links = linksData.map((link) => {
    const {id, route, title} = link;
    const style = addConditionedStyle(activeNavID === id, [s.Nav__link], s.active);
    return (
      <Link
        className={style.join(' ')}
        key={id}
        to={route}
        onClick={() => linkHandler(id)}
        data-alt={title}
      >
        <p>{title}</p>
        <span className={s.hidden} aria-hidden>{title}</span>
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
