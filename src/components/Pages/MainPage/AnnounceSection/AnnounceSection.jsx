
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
// import { motion, useViewportScroll } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { setActiveAnnounce, setData } from "../../../../redux";
import { PageTitle } from "../../../ui";
import { Div, NoContent, Section } from "../../../ui";
import { AnnounceItem } from "../../../AnnounceItem/AnnounceItem";
import { getArrayFromDb, sortOptions } from "../../../../functions/functions";

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
  //display: flex;
  overflow: hidden;
  //align-items: center;
  height: 300px;
`;

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
    <Section padding="60px 0 40px" bgColor="var(--colorToTry1)">
      <div className="container">
        <Div>
          <PageTitle tag="h2" title="Объявления"/>
          {data.length > 0  ? announceSectionContent : null}
        </Div>
      </div>
    </Section>
  );
};
