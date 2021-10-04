import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/userSlice';
import mainMenuReducer from '../slices/mainMenuSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    mainMenu: mainMenuReducer,
  }
})
