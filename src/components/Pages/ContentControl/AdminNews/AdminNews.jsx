import React, { useState } from 'react';

import s from './AdminNews.module.scss';

import NewsList from "./NewsList/";
import AdminNewsPopup from "./AdminNewsPopup";

const AdminNews = () => {
    const [isEditing, setIsEditing] = useState(null);
    const [popupOpened, setPopupOpened] = useState(false);


    const popup = popupOpened ?
        <AdminNewsPopup
            isEditing={isEditing}
            setPopupOpened={setPopupOpened}
        /> : null;

    const createNews = () => setPopupOpened(true);

    return (
        <section className={s.news}>
            <button className={s.news__create} onClick={createNews}>Создать новость</button>
            {popup}
            <NewsList />
        </section>
    )

};

export default AdminNews;
