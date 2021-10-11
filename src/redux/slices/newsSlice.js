import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onEmptyMsg: "Новостей пока что нет.",
  news: [],
  alerts: []
}

export const dynamicDataSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setData(state, action) {
      state[action.payload.name] = action.payload.dataValue;
    }
  }
});

export const { setData } = dynamicDataSlice.actions;
