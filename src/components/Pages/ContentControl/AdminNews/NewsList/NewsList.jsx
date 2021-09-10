import React, { useState, useEffect } from 'react';

import { useFirebase, MAIN_REF } from "../../../../../context/FirebaseProvider/FirebaseProvider";
import NewsItem from "./NewsItem/";
import { getArrayFromDb } from "../../../../../functions/functions";
import s from './NewsList.module.scss';
import Loader from "../../../../Loader";


const NewsList = (
    {
        confirmDeleteOpened, setConfirmDeleteOpened, setActiveReference, setPopupOpened, setDataToUpdate
    }) => {
    const [newsList, setNewsList] = useState([]);
    const { fdb } = useFirebase();

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
                <li className={s.newsList__li} key={id} >
                    <NewsItem
                        {...item}
                        index={index + 1}
                        confirmDeleteOpened={confirmDeleteOpened}
                        setConfirmDeleteOpened={setConfirmDeleteOpened}
                        setActiveReference={setActiveReference}
                        setPopupOpened={setPopupOpened}
                        setDataToUpdate={setDataToUpdate}
                    />
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
