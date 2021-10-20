import styled from 'styled-components';
import blob from './blob.svg';
import {motion} from "framer-motion";
import orangeFlower from "../../../assets/icons/flowers/floral-1.svg";
import React from "react";

const BushContainer = styled.div`
  //position: absolute;
  //left: 200px;
  bottom: 0;
  //order: 1;
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

const BushSvg = styled.div`
  position: relative;
  width: 600px;
  height: 230px;
  background-image: url(${blob});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Bush = ({ }) => {
  return (
    <BushContainer>
      <BushSvg>
        {flower1}
        {flower2}
      </BushSvg>
    </BushContainer>
  );

};
