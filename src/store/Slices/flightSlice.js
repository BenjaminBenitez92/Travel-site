import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
  name: "flights",
  initialState:{
    data: [],
    isLoading: false,
    error: null,
  }
});

export const flightReducer = flightSlice.reducer
