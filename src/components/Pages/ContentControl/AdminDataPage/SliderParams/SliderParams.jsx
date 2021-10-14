import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSettings } from '../../../../../redux';
import styled from 'styled-components';

import { MAIN_REF, useFirebase } from "../../../../../context/FirebaseProvider/FirebaseProvider";
import { Select, Accordion } from '../../../../ui';
import { Checkbox } from '../../../../ui';
import { Section } from "../../../../ui/";

const List = styled.ul`
  margin-right: 50px;
`;

const ListElement = styled.li`
  display: block;
  margin-bottom: 5px;
  color: #000000;
`;

const ListBox = styled.div`
  display: flex;
  //padding: 10px;
  transition: all 0.3s ease-in-out;
`;

export const SliderParams = ({ type }) => {
  const dispatch = useDispatch();
  const { fdb, setSliderParams } = useFirebase();
  const baseTitleText = 'Параметры слайдера';
  const sliderTitleText = type === "news" ? `${baseTitleText} новостей` :
    type === "announce" ? `${baseTitleText} объявлений` : null;
  const params = useSelector(state => state.sliderSettings[type]);


  const sliderParamsData = [
    {
      type: "select",
      value: params.itemsToShow,
      label: "Новостей в слайдере на главной странице:",
      name: 'itemsToShow',
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
      value: params.autoPlayInterval,
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
      value: params.animationDuration,
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
      value: params.animationType,
      label: "Тип слайдера",
      name: 'animationType',
      options: [
        { value: "fadeout", text: "Перекрытие" },
        { value: "slide", text: "Листание" },
      ]
    },

    {
      type: "checkbox",
      checked: params.infinite,
      label: "Зациклен ?",
      name: 'infinite',
    },

    {
      type: "checkbox",
      checked: params.autoPlay,
      label: "Автом. прокрутка",
      name: 'autoPlay',
    },

    {
      type: "checkbox",
      checked: params.disableButtons,
      label: "Убрать стрелки слайдера",
      name: 'disableButtons',
    },

    {
      type: "checkbox",
      checked: params.disableDotsControls,
      label: "Убрать точки навигации (снизу)",
      name: 'disableDotsControls',
    },

    {
      type: "checkbox",
      checked: params.disableSlideInfo,
      label: "Убрать счетчик слайдов",
      name: 'disableSlideInfo',
    },
  ];

  useEffect(() => {
    const paramsRef = fdb.ref(MAIN_REF + `/params/${type}/`);
    const refs = [paramsRef];
    paramsRef
      .on('value', (res) => {
        if (res.exists()) {
          dispatch(setSettings({ type: type, settingsData: res.val() }));
        } else {
        }
      });

    return () => {
      refs.forEach((ref) => ref.off());
    };
  }, [fdb, dispatch, type]);

  const onChangeHandler = (e) => {
    const target = e.target;

    if (target.type === "checkbox") {
      setSliderParams(type, target.name, target.checked);
      return;
    }

    setSliderParams(type, target.name, target.value);

  };


  const selectParams = sliderParamsData
    .filter(el => el.type === "select")
    .map(el => {
      const { name, label } = el;

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
    });

  const checkboxParams = sliderParamsData
    .filter(el => el.type === "checkbox")
    .map(el => {
        const { name, label } = el;
        return (
          <ListElement key={name}>
            <Checkbox
              name={name}
              checked={el.checked || false}
              onChange={onChangeHandler}
              labelText={label}
            />
          </ListElement>
        );
      }
    );

  return (
    <Section margin="0 0 15px">
      <Accordion title={sliderTitleText}>
        <ListBox>
          <List>
            {selectParams}
          </List>
          <List>
            {checkboxParams}
          </List>
        </ListBox>
      </Accordion>
    </Section>
  );
};
