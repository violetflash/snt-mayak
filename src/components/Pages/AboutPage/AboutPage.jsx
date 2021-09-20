import React from 'react';

import s from './AboutPage.module.scss';
import PageTitle from "../../PageTitle";
import GardenerGirl from "../../Parallax/GardenerGirl/GardenerGirl";

const AboutPage = () => {
    return (
        <section className={s.About}>
            <div className="container">
                <div className={s.About__content}>
                    <PageTitle tag="h2" title="О снт"/>
                    <p>About Page: Правление, Сотрудники, Предложения по благоустройству поселка</p>
                    <GardenerGirl/>
                </div>
            </div>
        </section>
    );

};

export default AboutPage;
