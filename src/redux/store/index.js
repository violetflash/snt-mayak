import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/userSlice';
import mainMenuReducer from '../slices/mainMenuSlice';
import { adminMenuSlice } from "../slices/adminMenuSlice";
import { authPopupSlice } from "../slices/authPopupSlice";
import { navLinkSlice } from "../slices/navLinkSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    mainMenu: mainMenuReducer,
    adminMenu: adminMenuSlice.reducer,
    authPopup: authPopupSlice.reducer,
    navLinks: navLinkSlice.reducer
  }
});