import React, { useState } from 'react';

import s from './AdminNews.module.scss';

import { useAuth } from '../../../../context/AuthProvider/AuthProvider';

import NewsList from "./NewsList/";

const AdminNews = () => {
    const { writeNewsDataToDB, auth } = useAuth();
    const [isEditing, setIsEditing] = useState(null);
    const [inputsData, setInputsData] = useState({ title: "", desc: "", date: "", time: "" });
    const submitText = isEditing ? 'Сохранить' : 'Создать';

    const resetInputs = () => {
        setInputsData({ title: "", desc: "", date: "", time: "" });
    };

    const { title, desc, date, time } = inputsData;

    const saveData = (e) => {
        e.preventDefault();
        const user = auth.currentUser.displayName;
        writeNewsDataToDB(user, title, desc, date, time);
    };

    const inputHandler = (e) => {
        const target = e.target;
        setInputsData({ ...inputsData, [target.name]: target.value })
    }

    return (
        <section className={s.news}>
            <form className={s.news__form}>
                <label >
                    <span>Заголовок новости:</span>
                    <input name="title" type="text" value={title} onChange={inputHandler}/>
                </label>
                <label >
                    <span>Описание новости:</span>
                    <input name="desc" type="text" value={desc} onChange={inputHandler}/>
                </label>
                <div className={s.news__dateTime}>
                    <label >
                        <span>Дата:</span>
                        <input name="date" type="text" value={date} onChange={inputHandler}/>
                    </label>
                    <label >
                        <span>Время:</span>
                        <input name="time" type="text" value={time} onChange={inputHandler}/>
                    </label>
                </div>
                <button className={s.news__submit} onClick={saveData}>{submitText}</button>
            </form>
            <NewsList />
        </section>
    )

};

export default AdminNews;
