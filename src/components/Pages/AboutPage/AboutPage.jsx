import React from 'react';

import s from './AboutPage.module.scss';

const AboutPage = () => {
    return (
        <section className={s.About}>
            <div className="container">
                <div className={s.About__content}>
                    <h2>About Page: Правление, Сотрудники, Предложения по благоустройству поселка</h2>
                </div>
            </div>
        </section>
    );

};

export default AboutPage;
