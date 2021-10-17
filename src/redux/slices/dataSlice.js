import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeUser: null,
  news: [],
  announce: [],
  dataToEdit: null,
  activeReference: null,
  sliderSettings: {
    news: {},
    announce: {}
  }
};

export const dataSlice = createSlice({
  name: "dynamicData",
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
    }
  }
});

export const {
  setData,
  setDataToEdit, resetDataToEdit,
  setActiveReference, clearActiveReference,
  setSettings,
  setActiveUser, clearActiveUser
} = dataSlice.actions;