import React from "react";
import { useSelector } from 'react-redux';
import { PageTitle } from "../../../ui";
import { Slider } from "../../../Slider/Slider";
import bg from '../../../../assets/bg/backGroup.svg';
import {NewsCard} from "../../../NewsCard/NewsCard";
import {News, NewsContent, NewsSectionContainer, NewsSliderWrapper} from "./style";
import {sortOptions} from "../../../../functions/functions";
// import { Leafs } from "../../../decorations/Leafs/Leafs";



// const newsSlider =
//   <NewsSliderWrapper>
//     <Slider type="news"/>
//   </NewsSliderWrapper>
// ;


export const NewsSection = () => {
  const { news } = useSelector(state => state.data);

  const cards = [...news]
    .sort(sortOptions)
    .map(el => {
      const { date, title, desc, id, imageUrl, time, author } = el;
      return (
        <NewsCard date={date} title={title} desc={desc} key={id} imageUrl={imageUrl} time={time} author={author}/>
      )
    })
  ;

  return (
    <NewsSectionContainer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {/*<Leafs/>*/}
      <div className="container">
        <NewsContent>
          <PageTitle tag="h2" title="Новости"/>
          <News>
            {cards}
          </News>
          {/*{newsSlider}*/}
        </NewsContent>
      </div>
    </NewsSectionContainer>
  );
};
