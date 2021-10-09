import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { closeConfirmPopup, clearActiveReference } from "../../../../../redux";
import { useFirebase } from '../../../../../context/FirebaseProvider/FirebaseProvider';

import s from './ConfirmDeletePopup.module.scss';

const ConfirmDeletePopup = () => {
    const dispatch = useDispatch();
    const { activeReference } = useSelector(state => state.adminEditItem)
    const { deleteRefFromDB } = useFirebase();

    const closeAndResetDeletionState = () => {
        dispatch(closeConfirmPopup());
        dispatch(clearActiveReference());
    }

    const deleteHandler = () => {
        deleteRefFromDB(`news/${activeReference.id}`);
        closeAndResetDeletionState();
    };

    const closeHandler = () => closeAndResetDeletionState();

    const title = activeReference.title;

    return (
        <article className={s.deletePopup}>
            <div className="container">
                <div className={s.deletePopup__overlay}>
                    <div className={s.deletePopup__popup}>
                        <button className={s.deletePopup__close} onClick={closeHandler}/>
                        <h2 className={s.deletePopup__title}>Удалить эту запись?</h2>
                        <p className={s.deletePopup__note}>{title}</p>
                        <div className={s.deletePopup__buttons}>
                            <button aria-label="удалить" className={s.deletePopup__yes} onClick={deleteHandler}>
                                Удалить
                            </button>
                            <button aria-label="отмена" className={s.deletePopup__no} onClick={closeHandler}>
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );

};

export default ConfirmDeletePopup;
