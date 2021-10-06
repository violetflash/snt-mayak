import React, { useEffect }  from 'react';
import {Img} from 'react-image'
import { useDispatch, useSelector } from 'react-redux';


import { setLoaded } from '../../../../../redux';


import { textCutter } from "../../../../../functions/functions";

import s from './NewsSliderItem.module.scss';
import Loader from "../../../../Loader";
import { Badge } from "../../../../ui/Badge/Badge";

const NewsSliderItem = ({ title, desc, date, time, imageUrl }) => {
  const dispatch = useDispatch();
  const { loaded } = useSelector(state => state.sliderImageLoaded);

  const loadHandle = () => {
    dispatch(setLoaded());
  }

  // <img src={imageUrl} alt={title} className={s.card__image} onLoad={loadHandle}/>;
  // const loader = loaded ? null : <Loader/> ;

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
        <Badge date={date}/>
      </div>
    </div>
  );

};

export default NewsSliderItem;
