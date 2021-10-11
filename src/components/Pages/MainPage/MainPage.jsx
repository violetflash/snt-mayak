import React from 'react';
import styled from 'styled-components';

import { Slider } from "../../Slider/Slider";
import GardenerGirl from "../../Parallax/GardenerGirl/GardenerGirl";

import s from "./MainPage.module.scss";
import PageTitle from "../../ui/PageTitle";
import Greetings from "./Greetings";
import { Section } from "../../ui/sharedStyles";
// import { Alerts } from "./Alerts/Alerts";

const AlertsWrapper = styled.div`
  padding: 0 0 15px;
  //box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background-color: var(--alertsDescBgColor);

  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;

const HeroSection = styled.section`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: var(--alertsSectionBgColor);
  }
`;

const MainPage = () => {
  return (
    <section className={s.MainPage}>
      <Greetings/>
      <HeroSection>
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
          </div>
        </div>
      </HeroSection>

      <Section padding="60px 0 40px" bgColor="alertsBg">
        <div className="container">
          <div className={s.MainPage__alarms}>
            <PageTitle tag="h2" title="Объявления"/>
            <AlertsWrapper>
              <Slider type="alerts"/>
            </AlertsWrapper>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default MainPage;
