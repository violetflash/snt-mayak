import { createSlice } from '@reduxjs/toolkit';
import {useState} from "react";

const initialState = {
  dataToEdit: null,
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
    },
    openConfirmPopup(state) {
      state.confirmDeleteOpened = true;
    },
    closeConfirmPopup(state) {
      state.confirmDeleteOpened = false;
    },
    clearActiveReference(state) {
      state.activeReference = null;
    },
    setActiveReference(state, action) {
      state.activeReference = action.payload.activeReference;
    }
  }
});

export const {
  resetDataToEdit, setDataToEdit,
  openEditorPopup, closeEditorPopup,
  openConfirmPopup, closeConfirmPopup,
  setActiveReference, clearActiveReference
} = adminEditItemSlice.actions;