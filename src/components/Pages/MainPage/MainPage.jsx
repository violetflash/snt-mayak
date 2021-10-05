import React from 'react';

import NewsSlider from "./NewsSlider/";
import GardenerGirl from "../../Parallax/GardenerGirl/GardenerGirl";

import s from "./MainPage.module.scss";
import PageTitle from "../../ui/PageTitle";
import Greetings from "./Greetings";

const MainPage = () => {
  return (
    <section className={s.MainPage}>
      <Greetings/>
      <div className="container">
        <div className={s.MainPage__content}>
          <div className={s.MainPage__hero}>
            <GardenerGirl />
            <div className={s.MainPage__news}>
              <PageTitle tag="h2" title="Последние новости"/>
              <NewsSlider/>
            </div>
          </div>
          <div className={s.MainPage__alarms}>
            <PageTitle tag="h2" title="Объявления"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
