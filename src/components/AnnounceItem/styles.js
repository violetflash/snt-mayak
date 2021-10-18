import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AnnounceContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  //margin: 0 0 30px;
  overflow: hidden;
  height: 200px;
`;

export const AnnounceInfo = styled(motion.div)`
  display: flex;
  flex: 1 0 35%;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 40px;
  overflow: hidden;
`;

export const DateTime = styled.span`
  display: inline-block;
  //margin: 0 0 30px;
  padding: 5px 10px;
  font-size: 20px;
  background-color: #f1b067;
`;

export const Title = styled.h3`
  display: inline-block;
  position: relative;
  padding: 30px 0;
  font-size: 24px;
  text-transform: uppercase;
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60%;
    height: 3px;
    background-color:#f1b067;
  }
`;

export const AnnounceDesc = styled(motion.p)`
  //flex-basis: 70%;
  line-height: 1.6;
  text-indent: 40px;
  text-align: justify;
  overflow: hidden;

`;
