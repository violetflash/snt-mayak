import React, { useState } from 'react';

import NewsList from "./NewsList/";
import AdminNewsPopup from "./AdminNewsPopup";
import ContentControlRootLink from "../ContentControlRootLink";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import NewsSliderParams from "./NewsSliderParams/NewsSliderParams";

import s from './AdminNews.module.scss';

const AdminNews = () => {
  const [dataToUpdate, setDataToUpdate] = useState(null);
  const [activeReference, setActiveReference] = useState(null);
  const [popupOpened, setPopupOpened] = useState(false);
  const [confirmDeleteOpened, setConfirmDeleteOpened] = useState(false);

  const popup = popupOpened ?
    <AdminNewsPopup
      dataToUpdate={dataToUpdate}
      setDataToUpdate={setDataToUpdate}
      activeReference={activeReference}
      setActiveReference={setActiveReference}
      setPopupOpened={setPopupOpened}
    /> : null;

  const confirmDeletePopup = confirmDeleteOpened ?
    <ConfirmDeletePopup
      setConfirmDeleteOpened={setConfirmDeleteOpened}
      activeReference={activeReference}
      setActiveReference={setActiveReference}
    /> : null;

  const createNews = () => setPopupOpened(true);

  return (
    <section className={s.news}>
      <div className={s.news__controls}>
        <ContentControlRootLink/>
        <button className={s.news__create} onClick={createNews}>Создать новость</button>
      </div>
      {popup}
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
