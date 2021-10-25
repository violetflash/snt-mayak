import { useSelector } from 'react-redux';
import styled from "styled-components";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { PageTitle } from "../../../ui";
import { Div } from "../../../ui";
import { AnnounceItem } from "../../../AnnounceItem/AnnounceItem";
import { sortOptions } from "../../../../functions/functions";
import sunIcon from "../../../../assets/icons/sun.svg";

import { AnnounceControls } from "./AnnounceControls/AnnounceControls";

const AnnounceSectionContainer = styled.section`
  position: relative;
  padding: 60px 0 40px;
`;

const Content = styled.div`
  overflow: hidden;
`;

const AnimatedIcon = styled.div`
  position: absolute;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  right: 10%;
  top: 5%;
  width: 100px;
  height: 100px;
`;

const sun =
  <AnimatedIcon
    as={motion.div}
    style={{ backgroundImage: `url(${sunIcon})` }}
    initial={{
      y: -90,
      opacity: 0,
      rotate: 0,
      scale: 0,
    }}
    animate={{ opacity: 1, y: 0, scale: 1, rotate: 90 }}
    transition={{
      delay: 1,
      duration: 1,
      // repeat: Infinity,
      repeatDelay: 1,
      // repeatType: 'reverse',
      type: 'just',
      ease: 'backOut'
    }}
  />
;

export const AnnounceSection = () => {
  // const { inView, entry, ref } = useInView();
  const type = 'announce';
  const data = useSelector(state => state.data[type]);
  const itemsToShow = useSelector(state => state.data.sliderSettings[type].itemsToShow);
  const { activeAnnounce } = useSelector(state => state.interface);


  const dataToRender = [...data]
    .sort(sortOptions)
    .filter((item, index) => index < itemsToShow)
    .map((item, index) => {
      const { id } = item;
      return <AnnounceItem key={id} index={index} {...item} activeAnnounce={activeAnnounce}/>;
    });



  const numOfButtons = dataToRender.length < itemsToShow ? dataToRender.length : +itemsToShow;

  const announceSectionContent =
    <>
      <AnnounceControls numOfButtons={numOfButtons} activeAnnounce={activeAnnounce} />
      <Content>
        {dataToRender}
      </Content>
    </>;

  // const noContent = <NoContent>Объявлений пока нет</NoContent>;

  return (
    <AnnounceSectionContainer>
      {sun}
      <div className="container">
        <Div>
          <PageTitle tag="h2" title="Объявления"/>
          {data.length > 0  ? announceSectionContent : null}
        </Div>
      </div>
    </AnnounceSectionContainer>
  );
};
