import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


import {Slider} from "../../Slider/Slider";
import GardenerGirl from "../../Parallax/GardenerGirl/GardenerGirl";

import s from "./MainPage.module.scss";
import PageTitle from "../../ui/PageTitle";
import Greetings from "./Greetings";
import {Section} from "../../ui/";
import MainBgVector from '../../../assets/bg/vectorBg2.svg';


const MainPageSection = styled.section`
  //background-color: #eff6fa;
`;

const DecorationWrapper = styled.div`
  padding-bottom: 40px;
  position: relative;
  z-index: 0;
  min-height: 450px;
`;

const AnnounceWrapper = styled.div`
  position: relative;
  padding: 0 0 15px;
  border-radius: 4px;

  //box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background-color: var(--announceDescBgColor);
  //z-index: 0;
  //box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .2);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -2px;
    right: -2px;
    //width: 101%;
    height: 100%;
    border-radius: 4px;

    background: var(--announceDescBgColor);
    transition: 0.5s;
    //vertical-align: middle;
    z-index: -1;
    transform: rotate(1.5deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, .2);
  }

  &::after {
    z-index: -2;
    transform: rotate(3deg);

  }
`;

const HeroSection = styled.section`
  padding: 50px 0 40px;
  position: relative;
  //background-size: 100%;
  background-position: 900px;
  background-size: 60%;
  background-repeat: no-repeat;
  transform: scaleX(-1);

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid saddlebrown;
    width: 100%;
    height: 80px;
    //background-color: var(--announceSectionBgColor);
    background-color: var(--heroBgColor);
  }
`;

const MainPage = () => {
  return (
    <MainPageSection>
      <Greetings/>
      <HeroSection style={{backgroundImage: `url(${MainBgVector})`}}>
        <div className="container">
          <div className={s.MainPage__content}>
            <div className={s.MainPage__hero}>
              <motion.div
                className={s.MainPage__news}
                initial={{
                  x: -200,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1, }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  // repeat: Infinity,
                  repeatDelay: 1,
                  // repeatType: 'reverse',
                  type: 'just',
                  ease: 'backOut'
                }}
              >
                <PageTitle tag="h2" title="Новости"/>
                <div className={s.MainPage__slider}>
                  <Slider type="news"/>
                </div>
              </motion.div>
              <GardenerGirl/>
            </div>
          </div>
        </div>
      </HeroSection>


      <Section padding="60px 0 40px" bgColor="alertsBg">
        <div className="container">
          <div className={s.MainPage__alarms}>
            <PageTitle tag="h2" title="Объявления"/>
            <DecorationWrapper>
              <motion.div
                initial={{
                  x: -1500,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1, }}
                transition={{
                  delay: 2,
                  duration: 1,
                  // repeat: Infinity,
                  repeatDelay: 1,
                  // repeatType: 'reverse',
                  type: 'just',
                  ease: 'backOut'
                }}
              >
                <AnnounceWrapper>
                  <Slider type="alerts"/>
                </AnnounceWrapper>
              </motion.div>

            </DecorationWrapper>
          </div>
        </div>
      </Section>
    </MainPageSection>
  );
};

export default MainPage;
