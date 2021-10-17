import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { PageTitle } from "../../../ui";
import { Slider } from "../../../Slider/Slider";
import { Div, NoContent, Section } from "../../../ui";


const DecorationWrapper = styled.div`
  padding-bottom: 40px;
  position: relative;
  z-index: 0;
  min-height: 450px;
`;

const FakeAnnounceItem = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  //width: 101%;
  //min-height: 400px;
  height: 100%;
  border-radius: 4px;

  background: var(--announceDescBgColor);
  transition: 0.5s;
  //vertical-align: middle;
  z-index: ${props => props.zx ? props.zx : 0};
  transform: ${props => props.transform ? props.transform : 0};

  //transform: rotate(1.5deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, .2);
`;

const AnnounceItemWrapper = styled.div`
  position: relative;
  padding: 0 0 15px;
  border-radius: 4px;
  background-color: var(--announceDescBgColor);
  box-shadow: 0 2px 20px rgba(0, 0, 0, .2);
`;

const variants1 = {
  start: {
    rotate: 1.5,
  },
  finish: {
    rotate: 0,
  }
};

const variants2 = {
  start: {
    rotate: 3,
  },
  finish: {
    rotate: 0,
  }
};

//Нужен scrollProgress

const contentVariants = {
  opened: { scale: 1 },
  closed: { scale: 0 }
}


export const AnnounceSection = () => {
  const { inView, entry, ref } = useInView();
  console.log(inView);

  // const [isHovered, setIsHovered] = useState(null);
  const { announce } = useSelector(state => state.dynamicData);

  // const setHoverHandle = () => setIsHovered(true);
  // const setLeaveHandle = () => setIsHovered(false);

  const announces =
    <DecorationWrapper>
      <AnnounceItemWrapper
        // onMouseEnter={setHoverHandle}
        // onMouseLeave={setLeaveHandle}
        ref={ref}
        as={motion.div}
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={inView && { x: 0, opacity: 1,}}
        transition={{
          delay: 0,
          duration: 1,
          // repeat: Infinity,
          // repeatDelay: 1,
          // repeatType: 'reverse',
          type: 'just',
          ease: 'backOut'
        }}
      >
        <Slider type="announce"/>
        <FakeAnnounceItem
          zx="-1"
          // variants={variants1}
          initial={{rotate: 1.5,}}
          animate={{ rotate: 0, }}
          // exit={{ rotate: 0 }}
          transition={{ duration: 0.4, delay: 0, type: 'just', ease: 'backOut'}}
        />
        <FakeAnnounceItem
          zx="-2"
          // variants={variants2}
          initial={{rotate: 1.5,}}
          animate={{ rotate: 0, }}
          // exit={ {rotate: 0} }
          transition={{ duration: 0.4, delay: 0, type: 'just', ease: 'backOut' }}
        />
      </AnnounceItemWrapper>
    </DecorationWrapper>
  ;


  const data = announce ? announces : <NoContent>Объявлений пока нет</NoContent>;


  return (
    <Section padding="60px 0 40px" bgColor="var(--colorToTry1)">
      <div className="container">
        <Div
          // as={motion.div}
          // variants={contentVariants}
          // animate={inView ? "opened" : "closed"}
          // transition={{ duration: 1, delay: 0, type: 'just', ease: 'easeOut'}}
        >
          <PageTitle tag="h2" title="Объявления"/>
          {data}
        </Div>
      </div>
    </Section>
  );
};
