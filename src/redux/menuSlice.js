import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggle } = menuSlice.actions;

export const selectIsOpen = (state) => state.menu.isOpen;

export default menuSlice.reducer;
