import React from 'react';
import {DateTime, Title, AnnounceDesc, AnnounceInfo, AnnounceContainer, TitleDecoration} from "./styles";

const delay = 0.4;
const duration = 0.6;

const infoVariants = {
  initial: {
    y: -200,
    opacity: 0,
    height: 0,
    transition: { delay: 0, duration }
  },
  enter: {
    y: 0,
    opacity: 1,
    height: 'auto',
    transition: { delay: 0.2 },
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
    height: 0,
    transition: { delay: 0 },

  },
  enter: {
    opacity: 1,
    x: 0,
    height: "auto",
    transition: { delay: 0.2 },

  }
}

export const AnnounceItem = ({ date, time, title, desc, index, activeAnnounce }) => {

  if (index !== +activeAnnounce) return null;

  return (
    <AnnounceContainer>
      <AnnounceInfo
        variants={infoVariants}
        initial="initial"
        animate="enter"
      >
        <DateTime>{date} - {time}</DateTime>
        <Title>
          {title}
          <TitleDecoration
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.15, delay: 0.3}}
          />
        </Title>
        {/*<AnimatedText text={title}/>*/}
      </AnnounceInfo>
      <AnnounceDesc
        variants={descVariants}
        initial="initial"
        animate="enter"
      >
        {desc}
      </AnnounceDesc>
    </AnnounceContainer>
  );
};
