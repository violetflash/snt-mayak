import React, { useState } from 'react';

import { useAuth } from '../../../../../context/AuthProvider/AuthProvider';


import s from './AdminNewsPopup.module.scss';

const AdminNewsPopup = ({ isEditing, setPopupOpened, editData = null }) => {
    const [inputsData, setInputsData] = useState({ title: "", desc: "", date: "", time: "" });
    const { writeNewsDataToDB, auth } = useAuth();
    const submitText = isEditing ? 'Сохранить' : 'Создать';
    const titleText = isEditing ? 'Редактировать' : 'Создать';

    if (editData) {
        setInputsData({ title: editData.title, desc: editData.desc, date: editData.date, time: editData.time })
    }

    const { title, desc, date, time } = inputsData;

    const disabled = !title || !desc || !date || !time;

    const resetInputs = () => {
        setInputsData({ title: "", desc: "", date: "", time: "" });
    };

    const saveData = (e) => {
        e.preventDefault();
        const user = auth.currentUser.displayName;
        writeNewsDataToDB(user, title, desc, date, time);
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
                .replace(/(?<=^\d{1})\d|(?<=^.{4})\d/, match => match + '.')
                .replace(/(?<=.{10})./, '')
            ;
        }


        setInputsData({ ...inputsData, [target.name]: target.value })
    }

    const closePopup = () => {
        setPopupOpened(false);
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
                            <div className={s.form__dateTime}>
                                <label >
                                    <span>Дата:</span>
                                    <input name="date" type="text" value={date} onChange={inputHandler}/>
                                </label>
                                <label >
                                    <span>Время:</span>
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
