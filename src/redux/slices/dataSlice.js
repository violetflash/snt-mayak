import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeUser: null,
  news: [],
  announce: [],
  dataToEdit: null,
  activeReference: null,
  activeAnnounce: 0,
  sliderSettings: {
    news: {
      animationType: "fadeout",
      animationDuration: 300,
      disableButtons: true,
      disableDotsControls: false,
      autoPlay: false,
      autoPlayInterval: 5000,
      disableSlideInfo: true,
      infinite: true,
    },
    announce: {
      itemsToShow: 1,
    }
  }
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action) {
      state[action.payload.name] = action.payload.dataValue;
    },
    resetDataToEdit(state) {
      state.dataToEdit = null;
    },
    setDataToEdit(state, action) {
      state.dataToEdit = action.payload;
    },
    clearActiveReference(state) {
      state.activeReference = null;
    },
    setActiveReference(state, action) {
      state.activeReference = action.payload;
    },
    setSettings(state, action) {
      state.sliderSettings[action.payload.type] = action.payload.settingsData;
    },
    setActiveUser(state, action) {
      state.activeUser = action.payload.activeUser;
    },
    clearActiveUser(state) {
      state.activeUser = null;
    },
  }
});

export const {
  setData,
  setDataToEdit, resetDataToEdit,
  setActiveReference, clearActiveReference,
  setSettings,
  setActiveUser, clearActiveUser
} = dataSlice.actions;
