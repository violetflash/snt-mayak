import React from 'react';
import {Img} from 'react-image'
import styled from 'styled-components';
// import Skeleton from 'react-loading-skeleton';
import {textCutter} from "../../../functions/functions";
import {Badge} from "../../ui/Badge/Badge";

import s from './newsSliderSlide.module.scss';
import Loader from "../../Loader";
import {H3Title} from "../../ui/sharedStyles";
import {Button} from "../../ui";


const BadgeWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 20px;
`;

const AlertArticle = styled.article`

`;

const HighLighted = styled.span`
  display: block;
  padding: 5px 10px;
  background-color: #f6c971;
  color: #000;
  font-size: 14px;
  font-style:italic;
  font-weight: 700;
  text-align:right;
  //border-radius: 4px;
  //border: 2px solid #414141;

  //span {
  //  position: relative;
  //
  //  &::before {
  //    content: "";
  //    position: absolute;
  //    bottom: -1px;
  //    width: 100%;
  //    height: 2px;
  //    //background-color: #414141;
  //    border-bottom: 2px dotted #414141;
  //  }
  //}
`;

const AlertBody = styled.p`
  text-indent: 40px;
  line-height: 1.6;
  text-align: justify;
`;

export const SliderSlide = ({ type, title, desc, date, time, imageUrl }) => {
  const newsSlide = type === 'news' ?
    <div className={s.wrapper}>
      <div className={s.card}>

        <figure className={s.card__figure}>
          <Img src={imageUrl} loader={<Loader/>}/>
          {/*<img src={imageUrl} alt={title} className={s.card__image}/>*/}
        </figure>
        <div className={s.card__textWrapper}>
          <h3 className={s.card__title}>{title}</h3>
          <time className={s.card__dateTime}>{date} - {time}</time>
          <div className={s.card__details}>
            <p className={s.card__desc}>{textCutter(desc, 100)}</p>
            <button className={s.card__more} disabled>Перейти к новости</button>
          </div>
        </div>
        <BadgeWrapper>
          <Badge date={date}/>
        </BadgeWrapper>
      </div>
    </div> : null
  ;

  const alertsSlide = type === 'alerts' ?
    <AlertArticle>
      <HighLighted><span>{date} в {time}</span></HighLighted>
      <H3Title margin="20px 0" >
        {title}
      </H3Title>
      <AlertBody>
        {desc}
      </AlertBody>
      <Button onClick={null} text="Чисто для теста" margin="0 0 0 15px" color="#000"/>
    </AlertArticle> : null
  ;

  return type === 'news' ? newsSlide :
    type === 'alerts' ? alertsSlide : null;
};

