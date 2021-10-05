import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/userSlice';
import mainMenuReducer from '../slices/mainMenuSlice';
import { adminMenuSlice } from "../slices/adminMenuSlice";
import { authPopupSlice } from "../slices/authPopupSlice";
import { navLinkSlice } from "../slices/navLinkSlice";
import { newsSlice } from "../slices/newsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    mainMenu: mainMenuReducer,
    adminMenu: adminMenuSlice.reducer,
    authPopup: authPopupSlice.reducer,
    navLinks: navLinkSlice.reducer,
    news: newsSlice.reducer,
  }
});
