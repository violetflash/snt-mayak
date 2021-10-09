import React from 'react';
import { useDispatch } from 'react-redux';
import { setDataToEdit, openEditorPopup } from '../../../../../../redux';
import s from './NewsItem.module.scss';

const NewsItem = (
  {
    title, desc, date, time, author, imageID, imageUrl, index, id,
    setConfirmDeleteOpened, setActiveReference, setPopupOpened, setDataToUpdate
  }) => {

  const dispatch = useDispatch();

  const openDeleteConfirm = () => {
    setConfirmDeleteOpened(true);
    setActiveReference({id, title});
  }

  const openEditPopup = () => {
    // setActiveReference(id);

    setDataToUpdate({
      title, desc, date, time, imageID, imageUrl, id
    })
    setPopupOpened(true);

    dispatch(setDataToEdit({
      dataToUpdate: { title, desc, date, time, imageID, imageUrl, id }
    }));
    dispatch(openEditorPopup());

  };

  return (
    <div className={s.NewsItem} data-index={index}>
      <div className={s.NewsItem__image} style={{backgroundImage: `url(${imageUrl})`}}>
      </div>
      <div className={s.NewsItem__info}>
        <div className={s.NewsItem__infoTop}>
          <span className={s.NewsItem__dateTime}>[{date}-{time}]</span>
          <span className={s.NewsItem__title}>{title}</span>
          <span className={s.NewsItem__author}>(by {author.email})</span>
          <div className={s.NewsItem__controls}>
            <button className={s.NewsItem__edit} onClick={openEditPopup}/>
            <button className={s.NewsItem__remove} onClick={openDeleteConfirm}/>
          </div>
        </div>
        <p className={s.NewsItem__desc}>{desc}</p>
      </div>
    </div>
  )
};

export default NewsItem;
