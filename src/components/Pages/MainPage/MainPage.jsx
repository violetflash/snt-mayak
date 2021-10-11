import React from 'react';

import { Slider } from "../../Slider/Slider";
import GardenerGirl from "../../Parallax/GardenerGirl/GardenerGirl";

import s from "./MainPage.module.scss";
import PageTitle from "../../ui/PageTitle";
import Greetings from "./Greetings";
// import { Alerts } from "./Alerts/Alerts";

const MainPage = () => {
  return (
    <section className={s.MainPage}>
      <Greetings/>
      <div className="container">
        <div className={s.MainPage__content}>
          <div className={s.MainPage__hero}>
            <div className={s.MainPage__news}>
              <PageTitle tag="h2" title="Новости"/>
              <div className={s.MainPage__slider}>
                <Slider type="news"/>
              </div>
            </div>
            <GardenerGirl />
          </div>
          <div className={s.MainPage__alarms}>
            <PageTitle tag="h2" title="Объявления"/>
            <Slider type="alerts"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
