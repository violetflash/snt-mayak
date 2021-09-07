import React, { useState } from 'react';
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";

import s from './ContentControl.module.scss';
import { Link } from "react-router-dom";
import AdminNews from "./AdminNews/";
import AdminPublicOffers from "./AdminPublicOffers/";
import NoMatch from "../../NoMatch/";
import {addConditionedStyle} from "../../../functions/functions";

const ContentControl = () => {
    const [activeLink, setActiveLink] = useState(null);
    const { path, url } = useRouteMatch();

    const tabsTitles = [
        { title: 'Новости', route: `news` },
        { title: 'Объявления для СНТ', route: `snt-offers` },
        { title: 'Частные объявления', route: `private-offers` },
        { title: 'Пользователи', route: `users` }]
    ;

    const tabHandler = (title) => {
        setActiveLink(title);
    };

    const tabs = tabsTitles.map(({ title, route }) => {
        const linkClass = addConditionedStyle(activeLink === title, [s.admin__tab], s.active);
        return (
            <li key={route} className={linkClass.join(' ')}>
                <Link to={`${url}/${route}`} onClick={() => tabHandler(title)}>{title}</Link>
            </li>
        );
    });

    const Topic = () => {
        const { topicId } = useParams();
        const content = topicId === 'news' ? <AdminNews /> :
            topicId === 'snt-offers' ? <AdminPublicOffers /> : null;
        return (
            <>
                {content}
            </>
        )
    };

    return (
        <div className="container">
            <div className={s.admin}>
                <h1 className={s.admin__title}>Управление контентом сайта</h1>
                <ul className={s.admin__tabs}>
                    {tabs}
                </ul>

                <Switch>
                    <Route exact path={path}>
                        <p>Пожалуйста, выберите категорию, которую хотите редактировать</p>
                        <p>Инструкция по редактированию данных</p>
                    </Route>
                    <Route path={`${path}/:topicId`} >
                        <Topic />
                    </Route>
                    <Route component={NoMatch} />
                </Switch>

            </div>

        </div>
    );

};

export default ContentControl;
