import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { openEditorPopup } from "../../../../redux";

import NewsList from "./NewsList/";
// import AdminNewsPopup from "./AdminNewsPopup";
import ContentControlRootLink from "../ContentControlRootLink";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import NewsSliderParams from "./NewsSliderParams/NewsSliderParams";

import s from './AdminNews.module.scss';
import AdminCreateOrEditPopup from "../../../ui/Popups/AdminCreateOrEditPopup/AdminCreateOrEditPopup";

const AdminNews = () => {
  const dispatch = useDispatch();
  const { editorPopupOpened, confirmDeleteOpened } = useSelector(state => state.adminEditItem);

  //Вынесено сюда только с целью проброса параметра кол-ва новостей в слайдере в компонент NewsList
  const [newsParams, setNewsParams] = useState(
    {
      newsToShow: 3,
      animationType: "fadeout",
      animationDuration: 300,
      disableButtons: false,
      disableDotsControls: false,
      autoPlay: true,
      autoPlayInterval: 5000,
      disableSlideInfo: true,
      infinite: true,
    }
  );

  // const editorPopup = editorPopupOpened ? <AdminNewsPopup/> : null;
  const editorPopup = editorPopupOpened ? <AdminCreateOrEditPopup type="news"/> : null;
  const confirmDeletePopup = confirmDeleteOpened ? <ConfirmDeletePopup/> : null;

  const createNews = () => dispatch(openEditorPopup());

  const { newsToShow } = newsParams;

  return (
    <section className={s.news}>
      <div className={s.news__controls}>
        <ContentControlRootLink/>
        <button className={s.news__create} onClick={createNews}>Создать новость</button>
      </div>
      {editorPopup}
      {confirmDeletePopup}
      <NewsSliderParams newsParams={newsParams} setNewsParams={setNewsParams}/>
      <NewsList newsToShow={newsToShow}/>
    </section>
  );

};

export default AdminNews;
