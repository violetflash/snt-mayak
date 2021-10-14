import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: {},
  announce: {}
};

export const sliderSettingsSlice = createSlice({
  name: 'sliderSettings',
  initialState,
  reducers: {
    setSettings(state, action) {
      state[action.payload.type] = action.payload.settingsData;
    }
  }
});

export const { setSettings } = sliderSettingsSlice.actions;
