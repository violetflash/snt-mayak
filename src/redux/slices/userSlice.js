import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login() {}
  }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
