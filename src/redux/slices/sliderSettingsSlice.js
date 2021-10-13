import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: {},
  announce: {}
};

export const sliderSettingsSlice = createSlice({
  name: 'sliderImageLoaded',
  initialState,
  reducers: {
    setSettings(state, action) {
      state[action.payload.type] = action.payload.settingsData;
    }
  }
});

export const { setSettings } = sliderSettingsSlice.actions;