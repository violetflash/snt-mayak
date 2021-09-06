import React from 'react';

import NewsSlider from "./NewsSlider/";
import GardenerGirl from "../../Parallax/GardenerGirl/GardenerGirl";

import s from "./MainPage.module.scss";
import PageTitle from "../../PageTitle";

const MainPage = () => {
    return (
        <section className={s.MainPage}>
            <div className={s.MainPage__greetings}>
                <h1>Мы рады приветствовать Вас на официальном сайте СНТ «Маяк»!</h1>
                <p className={s.MainPage__subtitle}>Тут вы можете оперативно получать актуальную информацию о жизни снт.</p>
            </div>
            <div className="container">
                <div className={s.MainPage__content}>


                    <PageTitle tag="h2" title="Последние новости" />
                    <div className={s.MainPage__hero}>
                        <NewsSlider />
                        {/*<GardenerGirl />*/}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MainPage;
