
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { PageTitle } from "../../../ui";
import { Slider } from "../../../Slider/Slider";
import { Div, NoContent, Section } from "../../../ui";


const AnnounceItemWrapper = styled.div`
  //position: relative;
  //padding: 0 0 15px;
  //border-radius: 4px;
  //background-color: var(--announceDescBgColor);
  //box-shadow: 0 2px 20px rgba(0, 0, 0, .2);
`;

export const AnnounceSection = () => {
  const { inView, entry, ref } = useInView();


  // const [isHovered, setIsHovered] = useState(null);
  const { announce } = useSelector(state => state.data);

  // const setHoverHandle = () => setIsHovered(true);
  // const setLeaveHandle = () => setIsHovered(false);

  // попробовать анимировать сам слайдер, без обертки
  const announces =
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
        delay: 0.3,
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
  ;


  const data = announce ? announces : <NoContent>Объявлений пока нет</NoContent>;


  return (
    <Section padding="60px 0 40px" bgColor="var(--colorToTry1)">
      <div className="container">
        <Div>
          <PageTitle tag="h2" title="Объявления"/>
          {data}
        </Div>
      </div>
    </Section>
  );
};
