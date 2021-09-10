import React from 'react';

import s from './NewsSliderItem.module.scss';

const NewsSliderItem = ({ title, desc, date, time, imageUrl }) => {
    return (
        <div className={s.card}>
            {/*<a href="#" className={s.card__link} />*/}
            <img src={imageUrl} alt={title} className={s.card__image}/>
            <div className={s.card__textWrapper}>
                <h2 className={s.card__title}>{title}</h2>
                <div className={s.card__dateTime}>{date} - {time}</div>
                <div className={s.card__details}>
                    <p className={s.card__desc}>{desc}</p>
                    {/*<a href="https://email.ru" className={s.card__more}>Read more*/}
                    {/*    <i className="fas fa-long-arrow-alt-right" />*/}
                    {/*</a>*/}
                </div>
            </div>
        </div>
    )

};

export default NewsSliderItem;