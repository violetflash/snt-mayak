import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeNavID: 0,
  activeAdminTab: null,
  authPopupIsOpened: false,
};

export const navigationSlice = createSlice({
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
    }
  }
});


export const { setActiveNavLink, setActiveAdminTab, openAuthPopup, closeAuthPopup } = navigationSlice.actions;