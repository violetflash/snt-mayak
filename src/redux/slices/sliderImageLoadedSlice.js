import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loaded: false
};

export const sliderImageLoadedSlice = createSlice({
  name: 'sliderImageLoaded',
  initialState,
  reducers: {
    setLoaded(state) {
      state.loaded = true;
    }
  }
});

export const { setLoaded } = sliderImageLoadedSlice.actions;