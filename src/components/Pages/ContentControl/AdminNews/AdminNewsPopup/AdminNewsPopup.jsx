import React, {useState} from 'react';

import {useFirebase} from '../../../../../context/FirebaseProvider/FirebaseProvider';
import { checkImage, addConditionedStyle } from "../../../../../functions/functions";

import s from './AdminNewsPopup.module.scss';

const AdminNewsPopup = ({setPopupOpened, dataToUpdate, setDataToUpdate, activeReference, setActiveReference}) => {
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
            title: "", desc: "", date: dateNow, time: timeNow, imageID: ""
        }

    const [inputsData, setInputsData] = useState(initialState);
    const [idError, setIdError] = useState(null);
    const [imageUrlState, setImageUrlState] = useState(null);
    const {writeNewsDataToDB} = useFirebase();
    const submitText = dataToUpdate ? 'Сохранить' : 'Создать';
    const titleText = dataToUpdate ? 'Редактировать' : 'Создать';


    // if (dataToUpdate) {
    //     const { title, desc, date, time, imageID } = dataToUpdate;
    //     setInputsData({
    //         title, desc, date, time, imageID
    //     });
    // }

    const {title, desc, date, time, imageID} = inputsData;

    const disabled = !title || !desc || !date || !time || !imageID || idError;

    const resetInputs = () => {
        setInputsData({title: "", desc: "", date: "", time: "", imageID: ""});
    };

    const saveData = async (e) => {
        e.preventDefault();
        const refToWrite = dataToUpdate ? dataToUpdate.id : `${Date.now()}`;

        writeNewsDataToDB(refToWrite, title, desc, imageID, imageUrlState, date, time);

        if (dataToUpdate) {
            setDataToUpdate(null);
        }

        resetInputs();
        setPopupOpened(false);
    };

    const onBlurHandler = async (e) => {
        e.target.value = e.target.value.trim();

        if (e.target.name === 'imageID') {
            setImageUrlState(null);

            const getImageUrl = async () => {
                // if (await checkImage(`https://source.unsplash.com/${imageID}/400x300`)) {
                //     return `https://source.unsplash.com/${imageID}/400x300`;
                // }
                // if (await checkImage(`https://source.unsplash.com/${imageID}/300x200`)) {
                //     return `https://source.unsplash.com/${imageID}/300x200`
                // }

                const res = await checkImage(`https://source.unsplash.com/${imageID}/300x200`);
                console.log(res);
                return res;
            }

            const imageUrl = await getImageUrl();
            console.log(imageUrl);

            if (! imageUrl) {
                setIdError(true);
                return;
            }

            setImageUrlState(imageUrl);
            setIdError(false);

        }
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
        }


        setInputsData({...inputsData, [target.name]: target.value})
    }

    const closePopup = () => {
        setPopupOpened(false);
        setDataToUpdate(null)
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
                                <input

                                    name="imageID"
                                    type="text"
                                    value={imageID}
                                    onChange={inputHandler}
                                    onBlur={onBlurHandler}
                                />
                                <span className={idErrorClass.join(' ')}>id не подходит по формату</span>
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
