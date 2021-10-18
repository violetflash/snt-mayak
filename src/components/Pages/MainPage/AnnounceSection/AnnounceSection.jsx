import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { setActiveAnnounce } from "../../../../redux";
import { PageTitle } from "../../../ui";
import { Div } from "../../../ui";
import { AnnounceItem } from "../../../AnnounceItem/AnnounceItem";
import { sortOptions } from "../../../../functions/functions";
import sunIcon from "../../../../assets/icons/sun.svg";

const AnnounceSectionContainer = styled.section`
  position: relative;
  padding: 60px 0 40px;
  background-color: var(--colorToTry1);
`;

const AnnounceControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 30px;
`;

const AnnounceButton = styled.button`
  margin: 0 15px;
  padding: 5px 10px;
  border-radius: 50%;
  border: 1px solid darksalmon;
  background-color: ${props => props.active ? 'darksalmon' : "transparent"};
  transition: all 0.3s ease 0s;
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
  const dispatch = useDispatch();
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

  const announceBtnHandler = (index) => {
    dispatch(setActiveAnnounce({ activeAnnounce: index }))
  };

  const numOfAnnouncesToShow = dataToRender.length < itemsToShow ? dataToRender.length : +itemsToShow;
  const btnArray = Array.from(Array(numOfAnnouncesToShow).keys());

  const controls = btnArray.map(el => {
    return (
      <AnnounceButton key={el} onClick={() => announceBtnHandler(el)} active={el === activeAnnounce}>
        {el + 1}
      </AnnounceButton>
    );
  })

  const announceSectionContent =
    <>
      <AnnounceControls>
        {controls}
      </AnnounceControls>
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
