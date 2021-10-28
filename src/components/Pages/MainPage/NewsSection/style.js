import { motion } from "framer-motion";
import styled from 'styled-components/macro';

import bg from "../../../../assets/bg/backGroup.svg";

export const NewsSectionContainer = styled(motion.section)`
  position: relative;
  padding: 50px 0 40px;
  background-image: url(${bg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: 2400px;
`;

export const NewsContent = styled.div`
  position: relative;
  height: auto;
`;

// export const NewsBlockWrapper = styled.div`
//   margin: 0 auto;
//   //max-width: 620px;
// `;

export const NewsSliderWrapper = styled.div`
  min-width: 620px;
  min-height: 420px;
  transition: border-color 0.3s ease;
`;

export const News = styled.ul`
  display: flex;
  //align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 50px 0;
`;
