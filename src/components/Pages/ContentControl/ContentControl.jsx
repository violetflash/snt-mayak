import React, { useEffect } from 'react';
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setActiveAdminTab } from '../../../redux';
import { Link } from "react-router-dom";
import AdminNews from "./AdminNews/";
import AdminPublicOffers from "./AdminPublicOffers/";
import NoMatch from "../../NoMatch/";
import {addConditionedStyle} from "../../../functions/functions";

import s from './ContentControl.module.scss';

const ContentControl = () => {
    const dispatch = useDispatch();
    const { activeAdminTab }  = useSelector(state => state.adminMenu);
    console.log(activeAdminTab);


    const { path, url } = useRouteMatch();

    const tabsTitles = [
        { title: 'Новости', route: `news` },
        { title: 'Объявления для СНТ', route: `snt-offers` },
        { title: 'Частные объявления', route: `private-offers` },
        { title: 'Пользователи', route: `users` }]
    ;

    const tabHandler = (title) => {
        dispatch(setActiveAdminTab({ title }))
    };

    const tabs = tabsTitles.map(({ title, route }) => {
        const linkClass = addConditionedStyle(activeAdminTab === title, [s.admin__tab], s.active);
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
        //добавить условный рендер остальных компонентов (частные объявления, пользователи)
        return (
            <>
                {content}
            </>
        )
    };

    useEffect(() => {
        return () => dispatch(setActiveAdminTab({ activeAdminTab: null }));
    }, [dispatch]);

    const content =
        <div className={s.admin__content}>
            <Switch>
                <Route exact path={path}>
                    <p className={s.admin__choose}>
                        <span>Пожалуйста, выберите категорию, которую хотите редактировать</span></p>
                    <p>Тут будет инструкция по вставке изображений с сервиса Unsplash:</p>
                    <input type="text" value="https://unsplash.com/s/photos/high-voltage?orientation=landscape" disabled/>
                </Route>
                <Route path={`${path}/:topicId`} >
                    <Topic />
                </Route>
                <Route component={NoMatch} />
            </Switch>
        </div>
    ;

    return (
        <div className={s.admin}>
            <div className={s.admin__head}>
                <h1 className={s.admin__title}>Управление контентом сайта</h1>
                <p className={s.admin__subtitle}>открыто для теста</p>
            </div>
            <section className={s.admin__inner}>
                <ul className={s.admin__tabs}>
                    {tabs}
                </ul>
                {content}
            </section>
        </div>


    );

};

export default ContentControl;
