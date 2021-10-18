import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlexContainer, AnimatedText } from "../ui";

import { DateTime, Title, AnnounceDesc, AnnounceInfo, AnnounceContainer } from "./styles";

const delay = 0.4;
const duration = 0.6;

const infoVariants = {
  initial: {
    y: -200,
    opacity: 0,
    transition: { delay: 0, duration }
    // transition: {
    //   duration: 0.5,
    //   delay: 0,
    //   // when: "beforeChildren",
    // },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2 },

    // transition: {
    //   duration: 0.5,
    //   delay: 0,
    //   // when: "beforeChildren",
    // },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { delay },
  },
}

const descVariants = {
  initial: {
    opacity: 0,
    x: 100,
    transition: { delay: 0 },

  },
  enter: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 },

  }
}

export const AnnounceItem = ({ id, date, time, title, desc, index, activeAnnounce }) => {

  // if (index !== +activeAnnounce) return null;

  return (
    <AnimatePresence initial={false}>
      {index === +activeAnnounce && (
        <AnnounceContainer
          key={id}
          exit={{opacity: 0, x: 300, height: 0, visibility: "hidden"}}
          transition={{duration: 0.2,}}
        >
          <AnnounceInfo
            key={id}
            variants={infoVariants}
            initial="initial"
            animate="enter"
          >
            <DateTime>{date} - {time}</DateTime>
            <Title>{title}</Title>
            {/*<AnimatedText text={title}/>*/}
          </AnnounceInfo>
          <AnnounceDesc
            key={id}
            variants={descVariants}
            initial="initial"
            animate="enter"
          >
            {desc}
          </AnnounceDesc>
        </AnnounceContainer>
      )}
    </AnimatePresence>

  );
};
