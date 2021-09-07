import React from 'react';
import s from './NewsItem.module.scss';

const NewsItem = ({ title, desc, date, time, author }) => {
    return (
        <div className={s.NewsItem}>
            <span>{date} - {time}</span>
            <p>{title} - {desc} (by {author})</p>
        </div>
    )
};

export default NewsItem;