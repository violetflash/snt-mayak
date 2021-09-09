import React, { useState, useEffect } from 'react';

import { useAuth, MAIN_REF } from "../../../../../context/AuthProvider/AuthProvider";
import NewsItem from "./NewsItem/";
import { getArrayFromDb } from "../../../../../functions/functions";
import s from './NewsList.module.scss';
import Loader from "../../../../Loader";


const NewsList = () => {
    const [newsList, setNewsList] = useState([]);
    const { fdb } = useAuth();

    useEffect(() => {
        const newsRef = fdb.ref(MAIN_REF + "/news/");
        const refs = [newsRef];
        newsRef
            .on('value', (res) => {
                if (res.exists()) {
                    setNewsList(getArrayFromDb(res.val()));
                }
            })

        return () => {
            refs.forEach((ref) => ref.off());
        }
    }, [fdb]);

    const sortOptions = (a, b) => b.id - a.id;

    const data = newsList.length ? newsList
        .sort(sortOptions)
        .map((item, index) => {
            const { id } = item;
            return (
                <li className={s.newsList__li} key={id} data-index={index + 1}>
                    <NewsItem {...item}/>
                </li>
            );
        }) : <Loader />
    ;

    return (
        <>
            <p>Список всех новостей:</p>
            <ul className={s.newsList}>
                {data}
            </ul>
        </>

    )

};

export default NewsList;
