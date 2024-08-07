// src/features/menu/menuSlice.js
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [], // Array di menu
    status: "idle", // Può essere 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    setMenu: (state, action) => {
      state.items = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMenu, setStatus, setError } = menuSlice.actions;

export default menuSlice.reducer;
