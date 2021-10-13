import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Slider } from "../../Slider/Slider";
import GardenerGirl from "../../Parallax/GardenerGirl/GardenerGirl";

import s from "./MainPage.module.scss";
import PageTitle from "../../ui/PageTitle";
import Greetings from "./Greetings";

import MainBgVector from '../../../assets/bg/vectorBg2.svg';
import flower1 from '../../../assets/icons/flowers/floral-1.svg';
import { AnnounceSection } from "../../AnnounceSection/AnnounceSection";

const MainPageSection = styled.section`
  //background-color: #eff6fa;
  padding-bottom: 100px;
`;

const NewsBlockWrapper = styled.div`
  margin-right: 60px;
  max-width: 520px;
`;

const NewsSliderWrapper = styled(motion.div)`
  min-width: 520px;
  min-height: 420px;
`;

const Flower = styled.div`
  position: absolute;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  right: ${props => props.right ? props.right : "unset"};
  bottom: ${props => props.bottom ? props.bottom : "unset"};
  width: ${props => props.width ? props.width : "auto"};
  height: ${props => props.height ? props.height : "auto"};
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
    //border-bottom: 2px solid saddlebrown;
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
        <Flower
          right="5%"
          bottom="5%"
          width="70px"
          height="70px"
          as={motion.div}
          style={{backgroundImage: `url(${flower1})`}}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{ opacity: 1, scale: 1, rotate: -180, }}
          transition={{
            delay: 1.5,
            duration: 1,
            // repeat: Infinity,
            repeatDelay: 1,
            // repeatType: 'reverse',
            type: 'just',
            ease: 'backOut'
          }}
        />
        <Flower
          right="10%"
          bottom="55%"
          width="50px"
          height="50px"
          as={motion.div}
          style={{backgroundImage: `url(${flower1})`}}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{ opacity: 1, scale: 1, rotate: -110, }}
          transition={{
            delay: 1,
            duration: 1,
            // repeat: Infinity,
            repeatDelay: 1,
            // repeatType: 'reverse',
            type: 'just',
            ease: 'backOut'
          }}
        />
        <div className="container">
          <div className={s.MainPage__content}>
            <div className={s.MainPage__hero}>
              <NewsBlockWrapper>
                <PageTitle tag="h2" title="Новости"/>
                <NewsSliderWrapper
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
                  <Slider type="news"/>
                </NewsSliderWrapper>
              </NewsBlockWrapper>
              <GardenerGirl/>
            </div>
          </div>
        </div>
      </HeroSection>
      <AnnounceSection/>
    </MainPageSection>
  );
};

export default MainPage;
