import React, {useEffect, useState} from 'react';
import {MAIN_REF, useFirebase} from "../../../../../context/FirebaseProvider/FirebaseProvider";
import { Select } from '../../../../ui';

import s from "./NewsSliderParams.module.scss";

const NewsSliderParams = () => {
  const {setNewsSliderParams} = useFirebase();
  const {fdb} = useFirebase();

  const [newsParams, setNewsParams] = useState(
    {
      newsToShow: 3,
      animationType: "fadeout",
      animationDuration: 300,
      disableButtons: false,
      disableDotsControls: false,
      autoPlay: true,
      autoPlayInterval: 5000,
      disableSlideInfo: true,
      infinite: true,
    }
  );

  useEffect(() => {
    const paramsRef = fdb.ref(MAIN_REF + "/params/newsSlider/");
    const refs = [paramsRef];
    paramsRef
      .on('value', (res) => {
        if (res.exists()) {
          setNewsParams(res.val());
        } else {
          setNewsParams({});
        }
      })

    return () => {
      refs.forEach((ref) => ref.off());
    }
  }, [fdb]);


  const sliderParamsHandler = (e) => {
    const target = e.target;

    if (target.type === "checkbox") {
      setNewsSliderParams(target.name, target.checked);
      return;
    }

    setNewsSliderParams(target.name, target.value);
  };

  const sliderParamsData = {
    newsToShow: {
      type: "select",
      label: "Новостей в слайдере на главной странице:",
      name: 'newsToShow',
      options: [
        { value: 1, text: 1 },
        { value: 2, text: 2 },
        { value: 3, text: 3 },
        { value: 4, text: 4 },
        { value: 5, text: 5 },
      ]
    },

    autoPlayInterval: {
      type: "select",
      label: "Время на слайд при автоматич. прокрутке",
      name: 'autoPlayInterval',
      options: [
        { value: 2000, text: 2 },
        { value: 3000, text: 3 },
        { value: 5000, text: 5 },
        { value: 7000, text: 7 },
        { value: 10000, text: 10 },
        { value: 15000, text: 15 },
        { value: 20000, text: 20 },
      ]
    },

  }



  // const newsToShow =
  //   <label className={s.params__label}>
  //     <span>Новостей в слайдере на главной странице:</span>
  //     <select
  //       name="newsToShow"
  //       className={s.params__select}
  //       value={newsParams.newsToShow}
  //       onChange={sliderParamsHandler}
  //     >
  //       <option value="1">1</option>
  //       <option value="2">2</option>
  //       <option value="3">3</option>
  //       <option value="4">4</option>
  //       <option value="5">5</option>
  //     </select>
  //   </label>
  // ;

  const slideSpeed =
    <label className={s.params__label}>
      <span>Скорость прокрутки (сек.)</span>
      <select
        name="animationDuration"
        value={newsParams.animationDuration}
        onChange={sliderParamsHandler}>
        <option value="500">0.5</option>
        <option value="1000">1</option>
        <option value="1500">1.5</option>
        <option value="2000">2</option>
        <option value="2500">2.5</option>
      </select>
    </label>
  ;

  const sliderType =
    <label className={s.params__label}>
      <span>Тип слайдера:</span>
      <select
        name="animationType"
        value={newsParams.animationType}
        onChange={sliderParamsHandler}>
        <option value="fadeout">Перекрытие</option>
        <option value="slide">Слайдер</option>
      </select>
    </label>
  ;

  const autoplayState =
    <label className={s.params__label}>
      <span>Автом. прокрутка</span>
      <input
        name="autoPlay"
        type="checkbox"
        onChange={sliderParamsHandler}
        checked={newsParams.autoPlay}/>
    </label>
  ;



  const autoplaySpeedState =
    <label className={s.params__label}>
      <span>Время на слайд при автопрокрутке (сек.)</span>
      <select
        name="autoPlayInterval"
        value={newsParams.autoPlayInterval}
        onChange={sliderParamsHandler}>
        <option value="2000">2</option>
        <option value="3000">3</option>
        <option value="5000">5</option>
        <option value="7000">7</option>
        <option value="10000">10</option>
        <option value="15000">15</option>
        <option value="20000">20</option>
      </select>
    </label>
  ;

  const infiniteState =
    <label className={s.params__label}>
      <span>Зациклен?</span>
      <input
        name="infinite"
        type="checkbox"
        onChange={sliderParamsHandler}
        checked={newsParams.infinite}/>
    </label>
  ;

  const controls =
    <label className={s.params__label}>
      <span>Скрыть стрелки прокрутки слайдера ?</span>
      <input
        name="disableButtons"
        type="checkbox"
        onChange={sliderParamsHandler}
        checked={newsParams.disableButtons}/>
    </label>
  ;

  const dotControls =
    <label className={s.params__label}>
      <span>Отключить точки навигации ?</span>
      <input
        name="disableDotsControls"
        type="checkbox"
        onChange={sliderParamsHandler}
        checked={newsParams.disableDotsControls}/>
    </label>
  ;

  const slidesInfo =
    <label className={s.params__label}>
      <span>Отключить отображение счетчика слайдов ?</span>
      <input
        name="disableSlideInfo"
        type="checkbox"
        onChange={sliderParamsHandler}
        checked={newsParams.disableSlideInfo}/>
    </label>
  ;

  const { newsToShow, autoPlayInterval } = sliderParamsData;

  return (
    <div className={s.params}>
      <p className={s.params__title}>Параметры слайдера новостей:</p>
      <ul className={s.params__list}>
        <li className={s.params__item}></li>
        <li className={s.params__item}>{sliderType}</li>
        <li className={s.params__item}>{slideSpeed}</li>
        <li className={s.params__item}>{autoplayState}</li>
        <li className={s.params__item}>{autoplaySpeedState}</li>
        <li className={s.params__item}>{infiniteState}</li>
        <li className={s.params__item}>{controls}</li>
        <li className={s.params__item}>{dotControls}</li>
        <li className={s.params__item}>{slidesInfo}</li>
      </ul>

      <Select
        labelText={autoPlayInterval.label}
        name={autoPlayInterval.name}
        optionsArray={autoPlayInterval.options}
        onChange={sliderParamsHandler}
      />
    </div>
  );

};

export default NewsSliderParams;
