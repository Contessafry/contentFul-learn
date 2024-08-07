// src/features/ristoranti/ristorantiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "ristoranti",
  initialState: {
    list: [], // Array di ristoranti
    status: "idle", // Può essere 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    setRistoranti: (state, action) => {
      state.list = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setRistoranti, setStatus, setError } = restaurantSlice.actions;

export default restaurantSlice.reducer;
