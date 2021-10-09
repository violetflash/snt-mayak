import { createSlice } from '@reduxjs/toolkit';
import {useState} from "react";

const initialState = {
  dataToUpdate: null,
  activeReference: null,
  editorPopupOpened: false,
  confirmDeleteOpened: false
}

export const adminEditItemSlice = createSlice({
  name: 'adminEdit',
  initialState,
  reducers: {
    resetDataToEdit(state) {
      state.dataToUpdate = null;
    },
    setDataToEdit(state, action) {
      state.dataToUpdate = action.payload.dataToUpdate;
    },
    openEditorPopup(state) {
      state.editorPopupOpened = true;
    },
    closeEditorPopup(state) {
      state.editorPopupOpened = false;
    }
  }
});

export const { resetDataToEdit, setDataToEdit, openEditorPopup, closeEditorPopup } = adminEditItemSlice.actions;