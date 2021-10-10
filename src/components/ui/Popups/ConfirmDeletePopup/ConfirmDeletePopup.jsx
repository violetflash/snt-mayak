import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { closeConfirmPopup, clearActiveReference } from "../../../../redux";
import { useFirebase } from '../../../../context/FirebaseProvider/FirebaseProvider';

import { Button } from "../../../ui";
import {PopupWrapper} from "../PopupWrapper/PopupWrapper";
import { AdminPopup, ClosePopup, FlexContainer } from "../styles";
import {H2Title, ParagraphText} from "../../sharedStyles";

export const ConfirmDeletePopup = () => {
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
    <PopupWrapper>
      <AdminPopup margin="100px auto 0" padding="65px 20px 30px">
        <ClosePopup onClick={closeHandler}/>
        <H2Title margin="0 0 20px" tt="uppercase">Удалить эту запись?</H2Title>
        <ParagraphText ta="center">{title}</ParagraphText>
        <FlexContainer align="center" justify="space-around">
          <Button delete aria="удалить" onClick={deleteHandler} padding="10px 15px">
            Удалить
          </Button>
          <Button aria="отмена"  onClick={closeHandler} padding="10px 15px">
            Отмена
          </Button>
        </FlexContainer>
      </AdminPopup>
    </PopupWrapper>
  );

};

export default ConfirmDeletePopup;
