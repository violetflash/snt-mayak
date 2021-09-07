import React from 'react';
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";


import PageTitle from "../../PageTitle";

import s from './ContentControl.module.scss';
import { Link } from "react-router-dom";
import AdminNews from "./AdminNews/";
import AdminPublicOffers from "./AdminPublicOffers/";
import NoMatch from "../../NoMatch/";

const ContentControl = () => {
    const { path, url } = useRouteMatch();

    const tabsTitles = [
        { title: 'Новости', route: `news` },
        { title: 'Объявления для СНТ', route: `snt-offers` },
        { title: 'Частные объявления', route: `private-offers` },
        { title: 'Пользователи', route: `users` }]
    ;

    const tabs = tabsTitles.map(({ title, route }) => (
        <li key={route} className={s.admin__tab} ><Link to={`${url}/${route}`}>{title}</Link></li>
    ));

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
                <PageTitle tag="h1" title="Управление контентом сайта"/>
                <ul className={s.admin__tabs}>
                    {tabs}
                </ul>

                <Switch>
                    <Route exact path={path}>
                        <p>Пожалуйста, выберите категорию, которую хотите редактировать</p>
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
