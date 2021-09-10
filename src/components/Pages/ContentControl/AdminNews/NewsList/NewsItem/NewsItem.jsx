import React from 'react';
import s from './NewsItem.module.scss';

const NewsItem = (
    {
        title, desc, date, time, author, imageID, imageLink, index, id,
        setConfirmDeleteOpened, setActiveReference, setPopupOpened, setDataToUpdate
    }) => {

    const openDeleteConfirm = () => {
        setConfirmDeleteOpened(true);
        setActiveReference(id);
    }

    const openEditPopup = () => {
        // setActiveReference(id);
        setDataToUpdate({
            title, desc, date, time, imageID, imageLink, id
        })
        setPopupOpened(true);
    };

    return (
        <div className={s.NewsItem} data-index={index}>
            <div className={s.NewsItem__image} style={{ backgroundImage: `url(${imageLink})` }}>
            </div>
            <div className={s.NewsItem__info}>
                <div className={s.NewsItem__infoTop}>
                    <span className={s.NewsItem__dateTime}>[{date}-{time}]</span>
                    <span className={s.NewsItem__title}>{title}</span>
                    <span className={s.NewsItem__author}>(by {author})</span>
                    <div className={s.NewsItem__controls}>
                        <button className={s.NewsItem__edit} onClick={openEditPopup} />
                        <button className={s.NewsItem__remove} onClick={openDeleteConfirm}/>
                    </div>
                </div>
                <p className={s.NewsItem__desc}>{desc}</p>
            </div>
        </div>
    )
};

export default NewsItem;
