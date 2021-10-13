import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/userSlice';
import mainMenuReducer from '../slices/mainMenuSlice';
import { adminMenuSlice } from "../slices/adminMenuSlice";
import { authPopupSlice } from "../slices/authPopupSlice";
import { navLinkSlice } from "../slices/navLinkSlice";
import { dynamicDataSlice } from "../slices/dynamicDataSlice";
import { sliderSettingsSlice } from "../slices/sliderSettingsSlice";
import { adminEditItemSlice } from "../slices/adminEditItemSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    mainMenu: mainMenuReducer,
    adminMenu: adminMenuSlice.reducer,
    authPopup: authPopupSlice.reducer,
    navLinks: navLinkSlice.reducer,
    dynamicData: dynamicDataSlice.reducer,
    sliderSettings: sliderSettingsSlice.reducer,
    adminEditItem: adminEditItemSlice.reducer
  }
});
