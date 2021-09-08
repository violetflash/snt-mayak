import React from 'react';
import s from './NewsItem.module.scss';

const NewsItem = ({ title, desc, date, time, author }) => {
    return (
        <div className={s.NewsItem}>
            <div className={s.NewsItem__left}>
                <p className={s.NewsItem__dateTime}>{date} - {time}</p>
                <p className={s.NewsItem__author}>by {author}</p>
            </div>
            <div className={s.NewsItem__right}>
                <p className={s.NewsItem__title}>{title}</p>
                <p className={s.NewsItem__desc}>{desc}</p>
            </div>
        </div>
    )
};

export default NewsItem;