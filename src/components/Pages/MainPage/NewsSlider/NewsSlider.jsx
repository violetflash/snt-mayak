import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import Loader from "../../../Loader";
import NewsSliderItem from "./NewsSliderItem/";

import { getArrayFromDb, sortOptions } from "../../../../functions/functions";
import { MAIN_REF, useFirebase } from "../../../../context/FirebaseProvider/FirebaseProvider";
import s from './NewsSlider.module.scss';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const NewsSlider = () => {
    const { fdb } = useFirebase();
    const [newsList, setNewsList] = useState([]);
    const defaultSliderOptions = {
        newsToShow: 3,
        slideSpeed: 1500,
        autoplayState: true,
        infiniteState: true,
        autoplaySpeedState: 3000
    }
    const [newsSliderParams, setNewsSliderParams] = useState(defaultSliderOptions);
    const { newsToShow, slideSpeed, autoplayState, infiniteState, autoplaySpeedState } = newsSliderParams;


    useEffect(() => {
        const newsRef = fdb.ref(MAIN_REF + "/news/");
        const newsSliderParamsRef = fdb.ref(MAIN_REF + "/params/newsSlider/");
        const refs = [newsRef, newsSliderParamsRef];
        newsRef
            .on('value', (res) => {
                if (res.exists()) {
                    setNewsList(getArrayFromDb(res.val()));
                } else {
                    setNewsList([]);
                }
            })
        newsSliderParamsRef
            .on('value', (res) => {
                if (res.exists()) {
                    setNewsSliderParams(res.val());
                } else {
                    setNewsSliderParams({});
                }
            })

        return () => {
            refs.forEach((ref) => ref.off());
        }
    }, [fdb]);

    const news = newsList.length ? newsList
        .sort(sortOptions)
        .filter((item, index) => index < newsToShow)
        .map((item) => {
            const { id } = item;
            return <NewsSliderItem key={id} {...item}/>;
    }) : <Loader/>

    const settings = {
        dots: true,
        infinite: infiniteState,
        speed: slideSpeed,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        autoplay: autoplayState,
        autoplaySpeed: +autoplaySpeedState
    };

    return (
        // <div className={s.Slider}>
        //     {news}
        // </div>
        <Slider {...settings} className={s.NewsSlider}>
            {news}
        </Slider>
    )

};

export default NewsSlider;
