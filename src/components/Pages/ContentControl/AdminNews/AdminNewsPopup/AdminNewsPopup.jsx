import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetDataToEdit, closeEditorPopup } from '../../../../../redux';

import {useFirebase} from '../../../../../context/FirebaseProvider/FirebaseProvider';
import {checkImageExist, addConditionedStyle} from "../../../../../functions/functions";

import s from './AdminNewsPopup.module.scss';

const AdminNewsPopup = () => {
  const dispatch = useDispatch();
  const { dataToEdit } = useSelector(state => state.adminEditItem);

  const now = new Date();
  const dateNow = now.toLocaleDateString();
  const timeNow = now.toLocaleTimeString().slice(0, 5);

  const initialState = dataToEdit ?
    {
      title: dataToEdit.title,
      desc: dataToEdit.desc,
      date: dataToEdit.date,
      time: dataToEdit.time,
      imageID: dataToEdit.imageID
    } :
    {
      title: "", desc: "", date: dateNow, time: timeNow, imageID: ""
    }

  const [inputsData, setInputsData] = useState(initialState);
  const [idError, setIdError] = useState(null);
  const [idChecked, setIdChecked] = useState(false);
  const [imageUrlState, setImageUrlState] = useState(null);
  const {writeNewsDataToDB} = useFirebase();
  const submitText = dataToEdit ? 'Сохранить' : 'Создать';
  const titleText = dataToEdit ? 'Редактировать' : 'Создать';

  const {title, desc, date, time, imageID} = inputsData;

  const disabled = !title || !desc || !date || !time || !idChecked || !imageID;

  const resetInputs = () => {
    setInputsData({title: "", desc: "", date: "", time: "", imageID: ""});
  };

  const saveData = async (e) => {
    e.preventDefault();

    const refToWrite = dataToEdit ? dataToEdit.id : `${Date.now()}`;
    writeNewsDataToDB(refToWrite, title, desc, imageID, imageUrlState, date, time);

    if (dataToEdit) {
      dispatch(resetDataToEdit());
    }

    resetInputs();
    dispatch(closeEditorPopup());
  };

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

  const idErrorClass = addConditionedStyle(idError, [s.form__notifyError], s.active);

  return (
    <article className={s.newsPopup}>
      <div className="container">
        <div className={s.newsPopup__overlay}>
          <div className={s.newsPopup__popup}>
            <button className={s.newsPopup__close} onClick={closePopup}/>
            <p className={s.newsPopup__title}>{titleText} новость</p>
            <form className={s.form}>
              <label>
                <span>Заголовок новости:</span>
                <input
                  name="title"
                  type="text"
                  value={title}
                  onChange={inputHandler}
                  onBlur={onBlurHandler}
                  autoFocus/>
              </label>
              <label>
                <span>Описание новости:</span>
                <textarea
                  name="desc"
                  value={desc}
                  onChange={inputHandler}
                  onBlur={onBlurHandler}
                />
              </label>
              <a
                className={s.form__unsplashUrl}
                href="https://unsplash.com/s/photos/high-voltage?orientation=landscape"
                target="__blank"
              >
                Найти ID изображения на Unsplash
              </a>
              <label className={s.form__id}>
                <span>ID изображения:</span>
                <div className={s.form__idWrapper}>
                  <input
                    name="imageID"
                    type="text"
                    value={imageID}
                    onChange={inputHandler}
                    onBlur={onBlurHandler}
                  />
                  <button className={s.form__checkID} onClick={checkID}>Проверить</button>
                </div>

                <span className={idErrorClass.join(' ')}>id не существует или не подходит по формату</span>
              </label>
              <div className={s.form__dateTime}>
                <label>
                  <span>Дата: <span>(ДД.ММ.ГГГГ)</span></span>
                  <input
                    name="date"
                    type="text"
                    value={date}
                    onChange={inputHandler}
                    onBlur={onBlurHandler}
                  />
                </label>
                <label>
                  <span>Время: <span>(ЧЧ:ММ)</span></span>
                  <input
                    name="time"
                    type="text"
                    value={time}
                    onChange={inputHandler}
                    onBlur={onBlurHandler}
                  />
                </label>
              </div>
              <button
                className={s.form__submit}
                onClick={saveData}
                disabled={disabled}>
                {submitText}
              </button>
            </form>
          </div>

        </div>
      </div>
    </article>
  );

};

export default AdminNewsPopup;
