import React, { useState } from 'react';
import s from './AdminNews.module.scss';

import NewsList from "./NewsList/";
import AdminNewsPopup from "./AdminNewsPopup";
import ContentControlRootLink from "../ContentControlRootLink";

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
            <div className={s.news__controls}>
                <ContentControlRootLink />
                <button className={s.news__create} onClick={createNews}>Создать новость</button>
            </div>

            {popup}
            <NewsList />
        </section>
    )

};

export default AdminNews;
