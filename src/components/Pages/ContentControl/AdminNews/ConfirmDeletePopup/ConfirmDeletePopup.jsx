import React from 'react';

import { useFirebase } from '../../../../../context/FirebaseProvider/FirebaseProvider';

import s from './ConfirmDeletePopup.module.scss';

const ConfirmDeletePopup = ({ activeReference, setConfirmDeleteOpened, setActiveReference }) => {
    const { deleteRefFromDB } = useFirebase();

    const closeAndResetDeletionState = () => {
        setActiveReference(null);
        setConfirmDeleteOpened(false);
    }

    const deleteHandler = () => {
        console.log(activeReference);
        deleteRefFromDB(`news/${activeReference}`);
        closeAndResetDeletionState();
    };

    const closeHandler = () => closeAndResetDeletionState();

    const title = activeReference.slice(0, activeReference.indexOf('-'));

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
