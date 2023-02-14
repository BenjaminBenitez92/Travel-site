import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    locStart: "",
    locEnd: "",
    adults: 1,
    kids: 0,
    itineraryType: "",
  },
  reducers: {
    handleLocStart: (state, actions) => {
      state.locStart = actions.payload;
    },
    handleLocEnd: (state, actions) => {
      state.locEnd = actions.payload;
    },
    handleNumOfAdults: (state, actions) => {
      state.adults = actions.payload;
    },
    handleNumOfkids: (state, actions) => {
      state.kids = actions.payload;
    },
    handleitineraryType: (state, actions) => {
      state.itineraryType = actions.payload;
    },
  },
});
export const {
  handleNumOfAdults,
  handleNumOfkids,
  handleLocEnd,
  handleLocStart,
  handleitineraryType,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
