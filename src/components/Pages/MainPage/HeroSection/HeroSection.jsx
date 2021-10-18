import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

import orangeFlower from "../../../../assets/icons/flowers/floral-1.svg";
import { PageTitle } from "../../../ui";
import { Slider } from "../../../Slider/Slider";
import GardenerGirl from "../../../Parallax/GardenerGirl/GardenerGirl";
import HeroBgVector from "../../../../assets/bg/vectorBg2.svg";
import { FlexContainer } from "../../../ui";

const HeroContent = styled.div`
  position: relative;
  height: auto;
  transform: scaleX(-1);
`;

const NewsBlockWrapper = styled.div`
  //margin-right: 60px;
  max-width: 620px;
`;

const NewsSliderWrapper = styled.div`
  min-width: 620px;
  min-height: 420px;
  border: 10px solid var(--bgColor);
  transition: border-color 0.3s ease;
`;

const AnimatedIcon = styled.div`
  position: absolute;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  left: ${props => props.left ? props.left : "unset"};
  right: ${props => props.right ? props.right : "unset"};
  top: ${props => props.top ? props.top : "unset"};
  bottom: ${props => props.bottom ? props.bottom : "unset"};
  width: ${props => props.width ? props.width : "auto"};
  height: ${props => props.height ? props.height : "auto"};
`;

const HeroSectionContainer = styled.section`
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

const flower1 =
  <AnimatedIcon
    right="5%"
    bottom="5%"
    width="70px"
    height="70px"
    as={motion.div}
    style={{ backgroundImage: `url(${orangeFlower})` }}
    initial={{
      scale: 0,
      opacity: 0,
    }}
    animate={{ opacity: 1, scale: 1, rotate: -180, }}
    transition={{
      delay: 2,
      duration: 1,
      // repeat: Infinity,
      repeatDelay: 1,
      // repeatType: 'reverse',
      type: 'just',
      ease: 'backOut'
    }}
  />
;

const flower2 =
  <AnimatedIcon
    right="10%"
    bottom="55%"
    width="50px"
    height="50px"
    as={motion.div}
    style={{ backgroundImage: `url(${orangeFlower})` }}
    initial={{
      scale: 0,
      opacity: 0,
    }}
    animate={{ opacity: 1, scale: 1, rotate: -110, }}
    transition={{
      delay: 1.9,
      duration: 1,
      // repeat: Infinity,
      repeatDelay: 1,
      // repeatType: 'reverse',
      type: 'just',
      ease: 'backOut'
    }}
  />
;

const newsSlider =
  <NewsSliderWrapper>
    <Slider type="news"/>
  </NewsSliderWrapper>
;


export const HeroSection = () => {
  return (
    <HeroSectionContainer style={{ backgroundImage: `url(${HeroBgVector})` }}>
      {flower1}
      {flower2}
      <div className="container">
        <HeroContent>
          <FlexContainer align="flex-end" justify="space-between">
            <NewsBlockWrapper>
              <PageTitle tag="h2" title="Новости"/>
              {newsSlider}
            </NewsBlockWrapper>
            <GardenerGirl/>
          </FlexContainer>
        </HeroContent>
      </div>
    </HeroSectionContainer>
  );
};
