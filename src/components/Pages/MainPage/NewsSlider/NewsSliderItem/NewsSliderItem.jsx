import React from 'react';

import { textCutter } from "../../../../../functions/functions";

import s from './NewsSliderItem.module.scss';

const NewsSliderItem = ({ title, desc, date, time, imageUrl }) => {
  return (
    <div className={s.card}>
      {/*<a href="#" className={s.card__link} />*/}
      <img src={imageUrl} alt={title} className={s.card__image}/>
      <div className={s.card__textWrapper}>
        <h3 className={s.card__title}>{title}</h3>
        <div className={s.card__dateTime}>{date} - {time}</div>
        <div className={s.card__details}>
          <p className={s.card__desc}>{textCutter(desc)}</p>
          <button className={s.card__more} disabled>Перейти к новости</button>
        </div>
      </div>
    </div>
  );

};

export default NewsSliderItem;
