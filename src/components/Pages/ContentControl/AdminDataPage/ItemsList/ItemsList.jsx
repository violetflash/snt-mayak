import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


import { useFirebase  } from "../../../../../context/FirebaseProvider/FirebaseProvider";
import { sortOptions } from "../../../../../functions/functions";
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
    type === 'announce' ? 'объявлений' : null;

  const { updateReduxDynamicDataState } = useFirebase();
  const dynamicData = useSelector(state => state.dynamicData);

  useEffect(() => {
    updateReduxDynamicDataState(type);
  }, [updateReduxDynamicDataState, type]);

  const data = dynamicData[type] ? [...dynamicData[type]]
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

