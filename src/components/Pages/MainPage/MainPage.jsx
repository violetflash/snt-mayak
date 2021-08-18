import React from 'react';

import s from "../AboutPage/AboutPage.module.scss";

const MainPage = () => {
    return (
        <section className={s.MainPage}>
            <div className="container">
                <div className={s.MainPage__content}>
                    <h2>Main Page: Новости, какая-то другая инфа</h2>
                </div>
            </div>
        </section>
    );
};

export default MainPage;
