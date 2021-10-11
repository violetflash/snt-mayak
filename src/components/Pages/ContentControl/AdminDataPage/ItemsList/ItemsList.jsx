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

export const ItemsList = ({ itemsToShow, type }) => {
  const titleName = type === 'news' ? 'новостей' :
    type === 'alerts' ? 'объявлений' : null;
  const [itemsList, setItemsList] = useState([]);
  const {fdb} = useFirebase();


  useEffect(() => {
    const newsRef = fdb.ref(MAIN_REF + `/${type}/`);
    const refs = [newsRef];
    newsRef
      .on('value', (res) => {
        if (res.exists()) {
          setItemsList(getArrayFromDb(res.val()));
        } else {
          setItemsList([]);
        }
      })

    return () => {
      refs.forEach((ref) => ref.off());
    }
  }, [fdb, type]);



  const data = itemsList.length ? itemsList
    .sort(sortOptions)
    .map((item, index) => {
      const {id} = item;
      return (
        <AdminEditableListItem key={id} type={type} {...item} index={index + 1}/>
      );
    }) : <Loader/>
  ;

  return (
    <>
      <Title>Список всех {titleName} (на главной: {itemsToShow})</Title>
      <List>
        {data}
      </List>
    </>
  )

};

