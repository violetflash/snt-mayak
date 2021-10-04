import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeID: 0
};

export const navLinkSlice = createSlice({
  name: 'navLinks',
  initialState,
  reducers: {
    setActiveNavLink(state, action) {
      state.activeID = action.payload.activeID;
    }
  }
});


export const { setActiveNavLink } = navLinkSlice.actions;