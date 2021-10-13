import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PageTitle from "../ui/PageTitle";
import { motion } from "framer-motion";
import { Slider } from "../Slider/Slider";
import {Div, NoContent, Section} from "../ui";
import styled from "styled-components";
import { useFirebase } from "../../context/FirebaseProvider/FirebaseProvider";



const DecorationWrapper = styled.div`
  padding-bottom: 40px;
  position: relative;
  z-index: 0;
  min-height: 450px;
`;



const AnnounceItemWrapper = styled.div`
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

const announces =
  <DecorationWrapper>
    <AnnounceItemWrapper
      as={motion.div}
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
      <Slider type="announce"/>

    </AnnounceItemWrapper>
  </DecorationWrapper>
;



export const AnnounceSection = () => {
  const type = 'announce';
  const { updateReduxDynamicDataState } = useFirebase();

  useEffect(() => {
    updateReduxDynamicDataState(type);
  }, [updateReduxDynamicDataState]);

  const { announce } = useSelector(state => state.dynamicData);
  const data = announce ? announces : <NoContent>Объявлений пока нет</NoContent>;

  return (
    <Section padding="60px 0 40px" bgColor="var(--bgColor)">
      <div className="container">
        <Div>
          <PageTitle tag="h2" title="Объявления"/>
          {data}
        </Div>
      </div>
    </Section>
  );
};
