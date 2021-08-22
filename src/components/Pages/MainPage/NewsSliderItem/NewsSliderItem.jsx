import React from 'react';

import s from './NewsSliderItem.module.scss';

const NewsSliderItem = () => {
    return (
        <article className={s.NewsItem}>
            <figure className={s.NewsItem__figure}>
                <img className={s.NewsItem__img} src="https://source.unsplash.com/PTfKblhWcCY/400x250" alt=""/>
                <figcaption>
                    21.08.2021. Аварийное отключение электроснабжения снт.
                </figcaption>
            </figure>
        </article>
    )

};

export default NewsSliderItem;