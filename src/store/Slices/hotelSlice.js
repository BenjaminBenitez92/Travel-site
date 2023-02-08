import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
});

export const hotelReducer = hotelSlice.reducer;
