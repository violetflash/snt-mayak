import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

import orangeFlower from "../../../../assets/icons/flowers/floral-1.svg";
import sunIcon from "../../../../assets/icons/sun.svg";
import PageTitle from "../../../ui/PageTitle";
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
  margin-right: 60px;
  max-width: 520px;
`;

const NewsSliderWrapper = styled(motion.div)`
  min-width: 520px;
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

const sun =
  <AnimatedIcon
    left="10%"
    top="5%"
    width="100px"
    height="100px"
    as={motion.div}
    style={{ backgroundImage: `url(${sunIcon})` }}
    initial={{
      y: -90,
      opacity: 0,
      rotate: 0,
      scale: 0,
    }}
    animate={{ opacity: 1, y: 0, scale: 1, rotate: 90 }}
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
;

const newsSlider =
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
;


export const HeroSection = () => {
  return (
    <HeroSectionContainer style={{ backgroundImage: `url(${HeroBgVector})` }}>
      {flower1}
      {flower2}
      {sun}
      <div className="container">
        <HeroContent>
          <FlexContainer align="flex-end">
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
