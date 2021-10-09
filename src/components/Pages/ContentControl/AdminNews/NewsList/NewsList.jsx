import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDataToEdit, setActiveReference, openEditorPopup, closeEditorPopup, openConfirmPopup } from "../../../../../redux";

import {useFirebase, MAIN_REF} from "../../../../../context/FirebaseProvider/FirebaseProvider";
import {getArrayFromDb, sortOptions} from "../../../../../functions/functions";
import NewsItem from "./NewsItem/";
import Loader from "../../../../Loader";


import s from './NewsList.module.scss';


const NewsList = (
  {
    confirmDeleteOpened, setConfirmDeleteOpened, setActiveReference, setPopupOpened, setDataToUpdate
  }) => {
  const dispatch = useDispatch();
  const [newsList, setNewsList] = useState([]);
  const {fdb} = useFirebase();

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


  const data = newsList.length ? newsList
    .sort(sortOptions)
    .map((item, index) => {
      const {id} = item;
      return (
        <li className={s.newsList__li} key={id}>
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
    }) : <Loader/>
  ;

  return (
    <>
      <p>Список всех новостей (первые 3 на главной):</p>
      <ul className={s.newsList}>
        {data}
      </ul>
    </>

  )

};

export default NewsList;
