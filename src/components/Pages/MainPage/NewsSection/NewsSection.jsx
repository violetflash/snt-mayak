import styled from "styled-components";
import React from "react";
import { motion } from 'framer-motion';
import { PageTitle } from "../../../ui";
import { Slider } from "../../../Slider/Slider";

const HeroContent = styled.div`
  position: relative;
  height: auto;
`;

const NewsBlockWrapper = styled.div`
  margin: 0 auto;
  //max-width: 620px;
`;

const NewsSliderWrapper = styled.div`
  min-width: 620px;
  min-height: 420px;
  border: 10px solid var(--bgColor);
  transition: border-color 0.3s ease;
`;

const HeroSectionContainer = styled(motion.section)`
  padding: 50px 0 40px;
  position: relative;
  //background-size: 100%;
  background-position: 700px -70px;
  background-size: 60%;
  background-repeat: no-repeat;
`;



const newsSlider =
  <NewsSliderWrapper>
    <Slider type="news"/>
  </NewsSliderWrapper>
;


export const NewsSection = () => {
  return (
    <HeroSectionContainer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container">
        <HeroContent>
          <NewsBlockWrapper>
            <PageTitle tag="h2" title="Новости"/>
            {newsSlider}
          </NewsBlockWrapper>
        </HeroContent>
      </div>
    </HeroSectionContainer>
  );
};
