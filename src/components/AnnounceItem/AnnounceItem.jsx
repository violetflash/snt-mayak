import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlexContainer, AnimatedText } from "../ui";

import { DateTime, Title, AnnounceDesc, AnnounceInfo, AnnounceContainer } from "./styles";

const infoVariants = {
  initial: {
    y: -200,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0,
      // when: "beforeChildren",
    },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0,
      // when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { duration: 1 },
  },
}

export const AnnounceItem = ({ date, time, title, desc, index, activeAnnounce }) => {

  if (index !== +activeAnnounce) return null;

  return (
    <AnnounceContainer>
      <AnimatePresence>
        <AnnounceInfo
          as={motion.div}
          variants={infoVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{duration: 1}}
          // transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.55 }}
        >
          <DateTime>{date} - {time}</DateTime>
          <Title>{title}</Title>
          <AnimatedText text={title}/>
        </AnnounceInfo>
      </AnimatePresence>
      <AnnounceDesc>
        {desc}
      </AnnounceDesc>
    </AnnounceContainer>
  );
};
