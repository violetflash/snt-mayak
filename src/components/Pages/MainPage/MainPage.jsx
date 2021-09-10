import React from 'react';

import NewsSlider from "./NewsSlider/";
// import GardenerGirl from "../../Parallax/GardenerGirl/GardenerGirl";

import s from "./MainPage.module.scss";
import PageTitle from "../../PageTitle";
import Greetings from "./Greetings";

const MainPage = () => {
    return (
        <section className={s.MainPage}>
            <Greetings />
            <div className="container">
                <div className={s.MainPage__content}>


                    <PageTitle tag="h2" title="Последние новости" />
                    <div className={s.MainPage__hero}>
                        <NewsSlider />
                        {/*<GardenerGirl />*/}
                    </div>
                    <PageTitle tag="h2" title="Объявления" />


                </div>
            </div>
        </section>
    );
};

export default MainPage;
