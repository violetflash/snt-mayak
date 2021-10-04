import { createSlice }  from '@reduxjs/toolkit';

const initialState = {
  activeLink: 0
}

const mainMenuSlice = createSlice({
  name: "mainMenu",
  initialState,
  reducers: {
    setActiveLink() {}
  }
});

export const { setActiveLink } = mainMenuSlice.actions;

export default mainMenuSlice.reducer;
