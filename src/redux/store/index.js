import { configureStore } from '@reduxjs/toolkit';

import { dataSlice } from "../slices/dataSlice";
import { interfaceSlice } from "../slices/interfaceSlice";

export const store = configureStore({
  reducer: {
    interface: interfaceSlice.reducer,
    data: dataSlice.reducer,
  }
});
