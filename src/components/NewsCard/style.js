import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import newsDefault from '../../assets/images/news-default.jpg';

export const StyledNewsCard = styled.figure`
  position: relative;
  overflow: hidden;
  margin: 0;
  min-width: 250px;
  max-width: 360px;
  width: 100%;
  background-color: var(--bgColor);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.div`
  width: 100%;
  min-height: 220px;
  background-image: ${props => props.img ? `url(${props.img})` :  `url(${newsDefault})` };
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FigCaption = styled(motion.figcaption)`
  position: relative;
  margin: -40px 15px 0;
  padding: 15px;
  background-color: var(--bgColor);
  transition: all 0.3s ease 0s;
`;

export const Date = styled.div`
  background-color: var(--datesColor);
  top: 15px;
  color: #fff;
  left: 15px;
  min-height: 48px;
  min-width: 48px;
  position: absolute;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Day = styled.span`
  display: block;
  line-height: 24px;
`;

export const Month = styled(Day)`
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h3`
  margin: 0;
  padding: 0;
  min-height: 50px;
  margin-bottom: 10px;
  margin-left: 60px;
  display: inline-block;
  font-weight: 600;
  text-transform: uppercase;
`;

export const CardDesc = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6em;
`;
