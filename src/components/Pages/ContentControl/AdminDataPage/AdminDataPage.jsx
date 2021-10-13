import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { openEditorPopup } from "../../../../redux";

import { ItemsList } from "./ItemsList/ItemsList";
import ContentControlRootLink from "../ContentControlRootLink";
import {Button, ConfirmDeletePopup, FlexContainer, NoContent} from '../../../ui';
import { SliderParams } from "./SliderParams/SliderParams";

import AdminCreateOrEditPopup from "../../../ui/Popups/AdminCreateOrEditPopup/AdminCreateOrEditPopup";
import { Section } from "../../../ui/";
import { useFirebase } from "../../../../context/FirebaseProvider/FirebaseProvider";

export const AdminDataPage = ({ type }) => {
  const { updateReduxDynamicDataState } = useFirebase();
  const createButtonText = type === 'announce' ? 'Создать объявление' :
    type === 'news' ? 'Создать новость' : null;
  const dispatch = useDispatch();
  const { editorPopupOpened, confirmDeleteOpened } = useSelector(state => state.adminEditItem);
  const data = useSelector(state => state.dynamicData);

  //Вынесено сюда только с целью проброса параметра кол-ва новостей в слайдере в компонент NewsList
  const [params, setParams] = useState(
    {
      itemsToShow: 3,
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
    updateReduxDynamicDataState(type);
  }, [updateReduxDynamicDataState, type]);

  // const editorPopup = editorPopupOpened ? <AdminNewsPopup/> : null;
  const editorPopup = editorPopupOpened ? <AdminCreateOrEditPopup type={type}/> : null;
  const confirmDeletePopup = confirmDeleteOpened ? <ConfirmDeletePopup type={type}/> : null;

  const createItem = () => dispatch(openEditorPopup());

  const { itemsToShow } = params;

  const itemsData = data[type] ?
    <>
      <SliderParams name={type} setParams={setParams} paramsRenderData={sliderParamsData}/>
      <ItemsList itemsToShow={itemsToShow} type={type}/>
    </> :
    <NoContent>Тут ничего пока нет</NoContent>;

  return (
    <Section>
      <FlexContainer align="center" justify="space-evenly" margin="0 0 15px">
        <ContentControlRootLink/>
        <Button text={createButtonText} padding="10px" onClick={createItem}/>
      </FlexContainer>
      {editorPopup}
      {confirmDeletePopup}
      {itemsData}
    </Section>
  );

};
