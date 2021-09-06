import React from 'react';

import s from './NewsSlider.module.scss';

import NewsSliderItem from "../NewsSliderItem";

const NewsSlider = () => {
    return (
        <div className={s.Slider}>
            <NewsSliderItem />
            <NewsSliderItem />
            <NewsSliderItem />
        </div>
    )

};

export default NewsSlider;
