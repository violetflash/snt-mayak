import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/userSlice';
import { dynamicDataSlice } from "../slices/dynamicDataSlice";
import { sliderSettingsSlice } from "../slices/sliderSettingsSlice";
import { adminEditItemSlice } from "../slices/adminEditItemSlice";
import { navigationSlice } from "../slices/navigationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    navigation: navigationSlice.reducer,
    dynamicData: dynamicDataSlice.reducer,
    sliderSettings: sliderSettingsSlice.reducer,
    adminEditItem: adminEditItemSlice.reducer
  }
});
