import React, { useState } from 'react';

import { useFirebase } from '../../../../../context/FirebaseProvider/FirebaseProvider';
import { checkImage } from "../../../../../functions/functions";

import s from './AdminNewsPopup.module.scss';

const AdminNewsPopup = ({ setPopupOpened, dataToUpdate, setDataToUpdate, activeReference, setActiveReference }) => {
    const now = new Date();
    const dateNow = now.toLocaleDateString();
    const timeNow = now.toLocaleTimeString().slice(0, 5);

    const initialState = dataToUpdate ?
        {
            title: dataToUpdate.title,
            desc: dataToUpdate.desc,
            date: dataToUpdate.date,
            time: dataToUpdate.time,
            imageID: dataToUpdate.imageID
        } :
        {
            title: "", desc: "", date: dateNow, time: timeNow , imageID: ""
        }

    const [inputsData, setInputsData] = useState(initialState);

    const { writeNewsDataToDB } = useFirebase();
    const submitText = dataToUpdate ? 'Сохранить' : 'Создать';
    const titleText = dataToUpdate ? 'Редактировать' : 'Создать';


    // if (dataToUpdate) {
    //     const { title, desc, date, time, imageID } = dataToUpdate;
    //     setInputsData({
    //         title, desc, date, time, imageID
    //     });
    // }

    const { title, desc, date, time, imageID } = inputsData;

    const disabled = !title || !desc || !date || !time || !imageID;

    const resetInputs = () => {
        setInputsData({ title: "", desc: "", date: "", time: "", imageID: "" });
    };

    const saveData = async (e) => {
        e.preventDefault();
        let imageUrl = `https://source.unsplash.com/${imageID}/400x300`;

        if (!await checkImage(imageUrl)) {
            imageUrl = `https://source.unsplash.com/${imageID}/300x200`;
        }
        const refToWrite = dataToUpdate ? dataToUpdate.id : `${title}-${Date.now()}`;

        writeNewsDataToDB(refToWrite, title, desc, imageID, imageUrl, date, time);

        if (dataToUpdate) {
            setDataToUpdate(null);
        }

        resetInputs();
        setPopupOpened(false);
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


        setInputsData({ ...inputsData, [target.name]: target.value })
    }

    const closePopup = () => {
        setPopupOpened(false);
        setDataToUpdate(null)
    };

    return (
        <article className={s.newsPopup}>
            <div className="container">
                <div className={s.newsPopup__overlay}>
                    <div className={s.newsPopup__popup}>
                        <button className={s.newsPopup__close} onClick={closePopup}/>
                        <p className={s.newsPopup__title}>{titleText} новость</p>
                        <form className={s.form}>
                            <label >
                                <span>Заголовок новости:</span>
                                <input name="title" type="text" value={title} onChange={inputHandler} autoFocus/>
                            </label>
                            <label >
                                <span>Описание новости:</span>
                                <textarea name="desc"  value={desc} onChange={inputHandler}/>
                            </label>
                            <label >
                                <span>ID изображения:</span>
                                <input name="imageID" type="text" value={imageID} onChange={inputHandler}/>
                            </label>
                            <div className={s.form__dateTime}>
                                <label >
                                    <span>Дата: <span>(ДД.ММ.ГГГГ)</span></span>
                                    <input name="date" type="text" value={date} onChange={inputHandler}/>
                                </label>
                                <label >
                                    <span>Время: <span>(ЧЧ:ММ)</span></span>
                                    <input name="time" type="text" value={time} onChange={inputHandler}/>
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
