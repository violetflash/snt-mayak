import React from 'react';
import PageTitle from "../../PageTitle";

import s from './ContentControl.module.scss';
import {Link} from "react-router-dom";

const ContentControl = () => {
    // const parent = 'content-control';
    const tabsTitles = [
        {title: 'Новости', route: `/news`},
        {title: 'Объявления для СНТ', route: `/snt-offers`},
        {title: 'Частные объявления', route: `/private-offers`}]
    ;

    const tabs = tabsTitles.map(({ title, route }) => (
        <Link className={s.admin__tab} to={route}>{title}</Link>
    ));

    return (
        <div className="container">
            <div className={s.admin}>
                <PageTitle tag="h1" title="Управление контентом сайта"/>
                <div className={s.admin__tabs}>
                    {tabs}
                </div>
            </div>

        </div>
    );

};

export default ContentControl;
