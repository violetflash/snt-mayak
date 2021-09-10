import React, { useState, useEffect } from 'react';

import { MAIN_REF, useFirebase } from "../../../../context/FirebaseProvider/FirebaseProvider";
import s from './NewsSlider.module.scss';

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
        return <NewsSliderItem key={id} {...item}/>
    }) : <Loader/>

    return (
        <div className={s.Slider}>
            {news}
        </div>
    )

};

export default NewsSlider;
