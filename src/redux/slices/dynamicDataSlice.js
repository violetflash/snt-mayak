import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: [],
  announce: [],
}

export const dynamicDataSlice = createSlice({
  name: "dynamicData",
  initialState,
  reducers: {
    setData(state, action) {
      state[action.payload.name] = action.payload.dataValue;
    }
  }
});

export const { setData } = dynamicDataSlice.actions;
