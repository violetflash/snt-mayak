import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/userSlice';
import mainMenuReducer from '../slices/mainMenuSlice';
import { adminMenuSlice } from "../slices/adminMenuSlice";
import { authPopupSlice } from "../slices/authPopupSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    mainMenu: mainMenuReducer,
    adminMenu: adminMenuSlice.reducer,
    authPopup: authPopupSlice.reducer,
  }
});