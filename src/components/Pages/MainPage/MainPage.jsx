import React from 'react';

import ParallaxGardener from "./ParallaxGardener";

import s from "../AboutPage/AboutPage.module.scss";

const MainPage = () => {
    return (
        <section className={s.MainPage}>
            <div className="container">
                <div className={s.MainPage__content}>
                    <h2>Main Page: Новости, какая-то другая инфа</h2>

                    <ParallaxGardener />
                </div>
            </div>
        </section>
    );
};

export default MainPage;
