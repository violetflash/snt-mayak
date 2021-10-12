import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetDataToEdit, closeEditorPopup } from "../../../../redux";

import { useFirebase } from '../../../../context/FirebaseProvider/FirebaseProvider';
import { checkImageExist } from "../../../../functions/functions";

import {
  AdminPopup,
  ClosePopup,
  Overlay,
  UnsplashLink,
  ErrorSpan,
} from "../styles";
import { TextInput, TextArea, Button, Div, ParagraphText, FlexContainer, Form, PureLabel } from "../../../ui";
import { LabelText } from "../../index";


const AdminCreateOrEditPopup = ({ type }) => {
  const dispatch = useDispatch();
  const { dataToEdit } = useSelector(state => state.adminEditItem);

  const now = new Date();
  const dateNow = now.toLocaleDateString();
  const timeNow = now.toLocaleTimeString().slice(0, 5);

  const initialState = dataToEdit && type === 'news' ?
    {
      title: dataToEdit.title,
      desc: dataToEdit.desc,
      date: dataToEdit.date,
      time: dataToEdit.time,
      imageID: dataToEdit.imageID
    } :
    dataToEdit && type === 'alerts' ?
      {
        title: dataToEdit.title,
        desc: dataToEdit.desc,
        date: dataToEdit.date,
        time: dataToEdit.time,
      } :
      { title: "", desc: "", date: dateNow, time: timeNow, imageID: ""};

  const [inputsData, setInputsData] = useState(initialState);
  const [idError, setIdError] = useState(null);
  const [idChecked, setIdChecked] = useState(false);
  const [imageUrlState, setImageUrlState] = useState(null);
  const { writeDataToDB } = useFirebase();

  const submitText = dataToEdit ? 'Сохранить' : 'Создать';
  const titleText = dataToEdit ? 'Редактировать' : 'Создать';
  const titleType = type === 'news' ? 'новость' : 'объявление';
  const inputTitleText = type === 'news' ? 'Заголовок новости' : 'Заголовок объявления';
  const inputDescText = type === 'news' ? 'Описание новости' : 'Описание объявления';

  const { title, desc, date, time, imageID } = inputsData;

  const disabled = type === 'news' ? !title || !desc || !date || !time || !idChecked || !imageID : false;

  const resetInputs = () => {
    setInputsData({title: "", desc: "", date: "", time: "", imageID: ""});
  };

  const saveData = async (e) => {
    e.preventDefault();

    const id = dataToEdit ? dataToEdit.id : `${Date.now()}`;
    const data = type === 'news' ? { type, id, title, desc, date, time, imageID, imageUrlState } :
      type = 'alerts' ? { type, id, title, desc, date, time } : {};
    writeDataToDB(type, data);

    if (dataToEdit) {
      dispatch(resetDataToEdit());
    }

    resetInputs();
    dispatch(closeEditorPopup());
  };

  //Эта функция валидирует ваще любой адрес! //TODO исправить!
  const checkID = async (e) => {
    e.preventDefault();
    const imageUrl = await checkImageExist(`https://source.unsplash.com/${imageID}/500x400`) ?
      `https://source.unsplash.com/${imageID}/500x400` :
      await checkImageExist(`https://source.unsplash.com/${imageID}/400x300`) ?
        `https://source.unsplash.com/${imageID}/300x200` :
        await checkImageExist(`https://source.unsplash.com/${imageID}/300x200`) ?
          `https://source.unsplash.com/${imageID}/300x200` : null;

    if (!imageUrl) {
      setIdError(true);
      return;
    }

    setImageUrlState(imageUrl);
    setIdError(false);
    setIdChecked(true);
  };

  const onBlurHandler = async (e) => {
    e.target.value = e.target.value.trim();
  };

  const inputHandler = (e) => {
    const target = e.target;

    if (target.name === "title" || target.name === "desc") {
      target.value = target.value
        .replace(/^./, match => match.toUpperCase())
        .replace(/^\s/, '');
    }

    if (target.name === "date") {
      target.value = target.value
        .replace(/[^\d.]/, '')
        .replace(/\.\./, '.')
        .replace(/(?<=.{10})./, '')
      ;
    }

    if (target.name === "time") {
      target.value = target.value
        .replace(/[^\d:]/, '')
        .replace(/::/, ':')
        .replace(/(?<=.{5})./, '')
      ;
    }

    if (target.name === 'imageID') {
      setIdError(null);
      setIdChecked(false);
    }


    setInputsData({...inputsData, [target.name]: target.value})
  }

  const closePopup = () => {
    dispatch(closeEditorPopup());
    dispatch(resetDataToEdit());
  };

  const unsplashLink = type === 'news' ?
    <UnsplashLink
      href="https://unsplash.com/s/photos/high-voltage?orientation=landscape"
      target="__blank"
    >
      Найти ID изображения на Unsplash
    </UnsplashLink> : null;

  const imageAdding = type === 'news' ?
    <PureLabel>
      <LabelText popup>ID изображения:</LabelText>
      <FlexContainer margin="5px 0 20px 0">
        <TextInput
          name="imageID"
          value={imageID}
          onChange={inputHandler}
          onBlur={onBlurHandler}
          margin="0"
        />
        <Button onClick={checkID} text="Проверить" margin="0 0 0 30px"/>
      </FlexContainer>
      <ErrorSpan idError={idError}>id не существует или не подходит по формату</ErrorSpan>
    </PureLabel> : null;

  return (
    <Div>
      <div className="container">
        <Overlay>
          <AdminPopup>
            <ClosePopup onClick={closePopup}/>
            <ParagraphText align="center" margin="0 0 20px" fw="700" ta="uppercase">
              {titleText} {titleType}
            </ParagraphText>
            <Form >
              <TextInput
                name="title"
                label={inputTitleText}
                onBlur={onBlurHandler}
                focus
                onChange={inputHandler}
                value={title}
              />
              <TextArea
                label={inputDescText}
                name="desc"
                value={desc}
                onChange={inputHandler}
                onBlur={onBlurHandler}
                margin="5px 0 20px"
                popup
              />
              {unsplashLink}
              {imageAdding}
              <FlexContainer justify="space-between" align="flex-end">
                <TextInput
                  name="date"
                  value={date}
                  onChange={inputHandler}
                  onBlur={onBlurHandler}
                  basis="calc(50% - 20px)"
                />
                <TextInput
                  name="time"
                  value={time}
                  onChange={inputHandler}
                  onBlur={onBlurHandler}
                  basis="calc(50% - 20px)"
                />
              </FlexContainer>
              <Button
                text={submitText}
                onClick={saveData}
                margin="20px 0 0 0"
                color="#000"
                padding="15px"
                width="100%"
                disabled={disabled}
              />

            </Form>
          </AdminPopup>
        </Overlay>
      </div>
    </Div>
  );

};

export default AdminCreateOrEditPopup;
