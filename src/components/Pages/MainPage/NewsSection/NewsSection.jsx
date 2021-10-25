import styled from 'styled-components/macro';
import React from "react";
import { motion } from 'framer-motion';
import { PageTitle } from "../../../ui";
import { Slider } from "../../../Slider/Slider";
import leafs from '../../../../assets/bg/leafsBig.svg';
import {Leafs} from "../../../decorations/Leafs/Leafs";

const NewsSectionContainer = styled(motion.section)`
  position: relative;
  padding: 50px 0 40px;
`;

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


const newsSlider =
  <NewsSliderWrapper>
    <Slider type="news"/>
  </NewsSliderWrapper>
;


export const NewsSection = () => {
  return (
    <NewsSectionContainer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Leafs/>
      <div className="container">
        <HeroContent>
          <NewsBlockWrapper>

            <PageTitle tag="h2" title="Новости"/>
            {newsSlider}
          </NewsBlockWrapper>
        </HeroContent>
      </div>
    </NewsSectionContainer>
  );
};
