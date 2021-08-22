import React from 'react';

import NewsSlider from "./NewsSlider/";
import GardenerGirl from "../../Parallax/GardenerGirl/GardenerGirl";

import s from "./MainPage.module.scss";

const MainPage = () => {
    return (
        <section className={s.MainPage}>
            <div className="container">
                <div className={s.MainPage__content}>
                    <div className={s.MainPage__hero}>
                        <NewsSlider />
                        <GardenerGirl />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MainPage;
