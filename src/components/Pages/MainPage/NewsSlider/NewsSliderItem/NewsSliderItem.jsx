import React from 'react';
import {Img} from 'react-image'
import styled from 'styled-components';
// import Skeleton from 'react-loading-skeleton';

import { textCutter } from "../../../../../functions/functions";
import { Badge } from "../../../../ui/Badge/Badge";

import s from './NewsSliderItem.module.scss';
import Loader from "../../../../Loader";


const BadgeWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 20px;
`;

const NewsSliderItem = ({ title, desc, date, time, imageUrl }) => {
  return (
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
    </div>
  );

};

export default NewsSliderItem;
