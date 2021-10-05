import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onEmptyMsg: "Новостей пока что нет.",
  newsList: []
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews(state, action) {
      state.newsList = action.payload.newsList;
    }
  }
});

export const { setNews } = newsSlice.actions;
