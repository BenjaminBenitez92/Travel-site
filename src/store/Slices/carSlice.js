import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
});

export const carsReducer = carSlice.reducer;
