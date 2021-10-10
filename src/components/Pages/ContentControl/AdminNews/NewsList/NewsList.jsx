import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


import { useFirebase, MAIN_REF } from "../../../../../context/FirebaseProvider/FirebaseProvider";
import { getArrayFromDb, sortOptions } from "../../../../../functions/functions";
// import NewsItem from "./NewsItem/";
import Loader from "../../../../Loader";
import { AdminEditableListItem } from "../../../../ui/";

const List = styled.ul`
  
  li {
    margin-bottom: 15px;
  }
`;

const Title = styled.h3`
  text-align:center;
`;

const NewsList = ({ newsToShow }) => {

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
        <AdminEditableListItem key={id} {...item} index={index + 1}/>
        // <li className={s.newsList__li} key={id}>
        //   <NewsItem{...item} index={index + 1}/>
        // </li>
      );
    }) : <Loader/>
  ;

  return (
    <>
      <Title>Список всех новостей (на главной: {newsToShow})</Title>
      <List>
        {data}
      </List>
    </>
  )

};

export default NewsList;
