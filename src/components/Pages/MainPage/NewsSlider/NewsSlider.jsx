import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import { MAIN_REF, useFirebase } from "../../../../context/FirebaseProvider/FirebaseProvider";
import s from './NewsSlider.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NewsSliderItem from "../NewsSliderItem/";
import { getArrayFromDb } from "../../../../functions/functions";
import Loader from "../../../Loader";

const NewsSlider = () => {
    const { fdb } = useFirebase();
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const newsRef = fdb.ref(MAIN_REF + "/news/");
        const refs = [newsRef];
        newsRef
            .on('value', (res) => {
                if (res.exists()) {
                    setNewsList(getArrayFromDb(res.val()));
                } else {
                    setNewsList([]);
                }
            })

        return () => {
            refs.forEach((ref) => ref.off());
        }
    }, [fdb]);

    const news = newsList.length ? newsList.map((item) => {
        const { id } = item;
        return <NewsSliderItem key={id} {...item}/>;
    }) : <Loader/>

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        // autoplay: true,
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
