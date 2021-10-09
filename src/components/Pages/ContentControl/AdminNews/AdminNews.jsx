import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { openEditorPopup } from "../../../../redux";

import NewsList from "./NewsList/";
import AdminNewsPopup from "./AdminNewsPopup";
import ContentControlRootLink from "../ContentControlRootLink";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import NewsSliderParams from "./NewsSliderParams/NewsSliderParams";

import s from './AdminNews.module.scss';

const AdminNews = () => {
  const dispatch = useDispatch();
  const {
    dataToEdit,
    activeReference,
    editorPopupOpened,
    confirmDeleteOpened
  } = useSelector(state => state.adminEditItem);

  const editorPopup = editorPopupOpened ? <AdminNewsPopup/> : null;
  const confirmDeletePopup = confirmDeleteOpened ? <ConfirmDeletePopup/> : null;

  const createNews = () => dispatch(openEditorPopup());

  return (
    <section className={s.news}>
      <div className={s.news__controls}>
        <ContentControlRootLink/>
        <button className={s.news__create} onClick={createNews}>Создать новость</button>
      </div>
      {editorPopup}
      {confirmDeletePopup}
      <NewsSliderParams/>
      <NewsList
        confirmDeleteOpened={confirmDeleteOpened}
        setConfirmDeleteOpened={setConfirmDeleteOpened}
        setActiveReference={setActiveReference}
        setPopupOpened={setPopupOpened}
        setDataToUpdate={setDataToUpdate}
      />
    </section>
  );

};

export default AdminNews;
