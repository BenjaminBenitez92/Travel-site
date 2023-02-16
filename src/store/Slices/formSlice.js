import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    locStart: "",
    locEnd: "",
    adults: 1,
    kids: 0,
    itineraryType: "",
    classType: ""
  },
  reducers: {
    handleLocStart: (state, action) => {
      state.locStart = action.payload;
    },
    handleLocEnd: (state, action) => {
      state.locEnd = action.payload;
    },
    handleNumOfAdults: (state, action) => {
      state.adults = action.payload;
    },
    handleNumOfkids: (state, action) => {
      state.kids = action.payload;
    },
    handleitineraryType: (state, action) => {
      state.itineraryType = action.payload;
    },
    handleClassType: (state, action) =>{
      state.classType = action.payload
    }
  },
});
export const {
  handleNumOfAdults,
  handleNumOfkids,
  handleLocEnd,
  handleLocStart,
  handleitineraryType,
  handleClassType
} = formSlice.actions;
export const formReducer = formSlice.reducer;
