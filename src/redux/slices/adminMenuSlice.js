import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeAdminTab: null
};

export const adminMenuSlice = createSlice({
  name: 'adminMenu',
  initialState,
  reducers: {
    setActiveAdminTab(state, action) {
      state.activeAdminTab = action.payload.title;
    }
  }
})

export const { setActiveAdminTab } = adminMenuSlice.actions;


