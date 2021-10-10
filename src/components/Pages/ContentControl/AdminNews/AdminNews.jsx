import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { openEditorPopup } from "../../../../redux";

import NewsList from "./NewsList/";
// import AdminNewsPopup from "./AdminNewsPopup";
import ContentControlRootLink from "../ContentControlRootLink";
// import ConfirmDeletePopup from "./ConfirmDeletePopup";
import {Button, ConfirmDeletePopup} from '../../../ui';
import NewsSliderParams from "./NewsSliderParams/NewsSliderParams";

import AdminCreateOrEditPopup from "../../../ui/Popups/AdminCreateOrEditPopup/AdminCreateOrEditPopup";
import {FlexContainer} from "../../../ui/Popups/styles";
import {Section} from "../../../ui/sharedStyles";

const AdminNews = () => {
  const dispatch = useDispatch();
  const { editorPopupOpened, confirmDeleteOpened } = useSelector(state => state.adminEditItem);

  //Вынесено сюда только с целью проброса параметра кол-ва новостей в слайдере в компонент NewsList
  const [newsParams, setNewsParams] = useState(
    {
      // newsToShow: 3,
      // animationType: "fadeout",
      // animationDuration: 300,
      // disableButtons: false,
      // disableDotsControls: false,
      // autoPlay: true,
      // autoPlayInterval: 5000,
      // disableSlideInfo: true,
      // infinite: true,
    }
  );

  // const editorPopup = editorPopupOpened ? <AdminNewsPopup/> : null;
  const editorPopup = editorPopupOpened ? <AdminCreateOrEditPopup type="news"/> : null;
  const confirmDeletePopup = confirmDeleteOpened ? <ConfirmDeletePopup/> : null;

  const createNews = () => dispatch(openEditorPopup());

  const { newsToShow } = newsParams;

  return (
    <Section>
      <FlexContainer align="center" justify="space-evenly" margin="0 0 15px">
        <ContentControlRootLink/>
        <Button text="Создать новость" padding="10px" onClick={createNews}/>
      </FlexContainer>
      {editorPopup}
      {confirmDeletePopup}
      <NewsSliderParams newsParams={newsParams} setNewsParams={setNewsParams}/>
      <NewsList newsToShow={newsToShow}/>
    </Section>
  );

};

export default AdminNews;
