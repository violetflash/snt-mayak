import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


import { useFirebase  } from "../../../../../context/FirebaseProvider/FirebaseProvider";
import { sortOptions } from "../../../../../functions/functions";
import Loader from "../../../../Loader";
import {AdminEditableListItem, H3Title} from "../../../../ui/";

const List = styled.ul`
  
  li {
    margin-bottom: 15px;
  }
`;

export const ItemsList = ({ itemsToShow, type }) => {
  const titleName = type === 'news' ? 'новостей' :
    type === 'announce' ? 'объявлений' : null;

  const { updateReduxData } = useFirebase();
  const data = useSelector(state => state.data[type]);

  useEffect(() => {
    updateReduxData(type);
  }, [updateReduxData, type]);

  const dataToRender = data ? [...data]
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
      <H3Title fz="18px" margin="30px 0 10px">Список всех {titleName} (на главной: {itemsToShow})</H3Title>
      <List>
        {dataToRender}
      </List>
    </>
  )

};

