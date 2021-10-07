import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import {MAIN_REF, useFirebase} from "../../../../../context/FirebaseProvider/FirebaseProvider";
import { Select } from '../../../../ui';
import { Checkbox } from '../../../../ui';

import s from "./NewsSliderParams.module.scss";

const List = styled.ul`
  margin-right: 50px;
`;

const ListElement = styled.li`
  display: block;
  margin-bottom: 5px;
`;

const ListBox = styled.div`
  display: flex;
  
`;

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


  const onChangeHandler = (e) => {
    const target = e.target;

    if (target.type === "checkbox") {
      setNewsSliderParams(target.name, target.checked);
      return;
    }

    setNewsSliderParams(target.name, target.value);
  };

  const sliderParamsData = [
    {
      type: "select",
      value: newsParams.newsToShow,
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

    {
      type: "select",
      value: newsParams.autoPlayInterval,
      label: "Время на слайд (сек.)",
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

    {
      type: "select",
      value: newsParams.animationDuration,
      label: "Скорость пролистывания слайда (сек.)",
      name: 'animationDuration',
      options: [
        { value: 300, text: 0.3 },
        { value: 500, text: 0.5 },
        { value: 1000, text: 1 },
        { value: 1500, text: 1.5 },
        { value: 2000, text: 2 },
        { value: 2500, text: 2.5 },
      ]
    },

    {
      type: "select",
      value: newsParams.animationType,
      label: "Тип слайдера",
      name: 'animationType',
      options: [
        { value: "fadeout", text: "Перекрытие" },
        { value: "slide", text: "Листание" },
      ]
    },

    {
      type: "checkbox",
      checked: newsParams.infinite,
      label: "Зациклен ?",
      name: 'infinite',
    },

    {
      type: "checkbox",
      checked: newsParams.autoPlay,
      label: "Автом. прокрутка",
      name: 'autoPlay',
    },

    {
      type: "checkbox",
      checked: newsParams.disableButtons,
      label: "Убрать стрелки слайдера",
      name: 'disableButtons',
    },

    {
      type: "checkbox",
      checked: newsParams.disableDotsControls,
      label: "Убрать точки навигации (снизу)",
      name: 'disableDotsControls',
    },

    {
      type: "checkbox",
      checked: newsParams.disableSlideInfo,
      label: "Убрать счетчик слайдов",
      name: 'disableSlideInfo',
    },
  ];

  const selectParams = sliderParamsData.map(el => {
    const { type, name, label } = el;

    if (type === 'select') {
      return (
        <ListElement key={name}>
          <Select
            name={name}
            labelText={label}
            optionsArray={el.options}
            onChange={onChangeHandler}
            value={el.value}
          />
        </ListElement>
      );
    }
  });

  const checkboxParams = sliderParamsData.map(el => {
    const { type, name, label } = el;

    if (type === 'checkbox') {
      return (
        <ListElement key={name}>
          <Checkbox
            name={name}
            checked={el.checked}
            onChange={onChangeHandler}
            labelText={label}
          />
        </ListElement>
      )
    }
  })

  return (
    <div className={s.params}>
      <p className={s.params__title}>Параметры слайдера новостей: (убрать в аккордеон)</p>
      <ListBox>
        <List>
          {selectParams}
        </List>
        <List>
          {checkboxParams}
        </List>
      </ListBox>
    </div>
  );

};

export default NewsSliderParams;
