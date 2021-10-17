import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeNavID: 0,
  activeAdminTab: null,
  authPopupIsOpened: false,
  editorPopupOpened: false,
  confirmDeleteOpened: false
};

export const interfaceSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveNavLink(state, action) {
      state.activeNavID = action.payload.activeNavID;
    },

    setActiveAdminTab(state, action) {
      state.activeAdminTab = action.payload.title;
    },

    openAuthPopup(state) {
      state.authPopupIsOpened = true;
    },

    closeAuthPopup(state) {
      state.authPopupIsOpened = false;
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
  }
});


export const {
  setActiveNavLink,
  setActiveAdminTab,
  openAuthPopup, closeAuthPopup,
  openEditorPopup, closeEditorPopup,
  openConfirmPopup, closeConfirmPopup
} = interfaceSlice.actions;