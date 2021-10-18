import React from 'react';
import styled from 'styled-components';
import Greetings from "./Greetings";
import { AnnounceSection } from "./AnnounceSection/AnnounceSection";
import { HeroSection } from "./HeroSection/HeroSection";

const MainPageSection = styled.section`
  //background-color: #eff6fa;
  padding-bottom: 100px;
`;

const MainPage = () => {

  return (
    <MainPageSection>
      <Greetings/>
      <AnnounceSection/>
      <HeroSection/>
    </MainPageSection>
  );
};

export default MainPage;
