import React from 'react';

import s from './AboutPage.module.scss';
import PageTitle from "../../ui/PageTitle";

const AboutPage = () => {
    return (
        <section className={s.About}>
            <div className="container">
                <div className={s.About__content}>
                    <PageTitle tag="h2" title="О снт"/>
                    <p>About Page: Правление, Сотрудники, Предложения по благоустройству поселка</p>
                </div>
            </div>
        </section>
    );

};

export default AboutPage;
