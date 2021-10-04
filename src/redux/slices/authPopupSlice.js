import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authPopupIsOpened: false
};

export const authPopupSlice = createSlice({
    name: "authPopupSlice",
    initialState,
    reducers: {
        openAuthPopup(state) {
            state.authPopupIsOpened = true;
        },
        closeAuthPopup(state) {
            state.authPopupIsOpened = false;
        }
    }
});

export const { openAuthPopup, closeAuthPopup } = authPopupSlice.actions;

export default authPopupSlice.reducer;
