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

export const ItemsList = ({ itemsToShow, name }) => {
  const titleName = name === 'news' ? 'новостей' :
    name === 'alerts' ? 'объявлений' : null;
  const [itemsList, setItemsList] = useState([]);
  const {fdb} = useFirebase();


  useEffect(() => {
    const newsRef = fdb.ref(MAIN_REF + `/${name}/`);
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
  }, [fdb, name]);



  const data = itemsList.length ? itemsList
    .sort(sortOptions)
    .map((item, index) => {
      const {id} = item;
      return (
        <AdminEditableListItem key={id} {...item} index={index + 1}/>
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

