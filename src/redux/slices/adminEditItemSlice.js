import { createSlice } from '@reduxjs/toolkit';

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
      state.dataToEdit = null;
    },
    setDataToEdit(state, action) {
      state.dataToEdit = action.payload;
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
      state.activeReference = action.payload;
    }
  }
});

export const {
  resetDataToEdit, setDataToEdit,
  openEditorPopup, closeEditorPopup,
  openConfirmPopup, closeConfirmPopup,
  setActiveReference, clearActiveReference
} = adminEditItemSlice.actions;