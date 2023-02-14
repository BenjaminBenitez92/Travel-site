import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
  name: "flights",
  initialState: {
    input: {
      dateDeparture: "",
      dateReturn: "",
      locationDeparture: "",
      locationArrival: "",
      classType: "",
      sortOrder: "",
      itineraryType: "",
      priceMin: 0,
      priceMax: 0,
      numberOfPassengers: 1,
      numberOfStops: 0,
    },

    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    departureDate: (state, action) => {
      state.input.dateDeparture = action.payload;
    },
    returnDate: (state, actions) => {
      state.input.dateReturn = actions.payload;
    },
    locDeparture: (state, action) => {
      state.input.locationDeparture = action.payload;
    },
    locArrival: (state, action) => {
      state.input.locationArrival = action.payload;
    },
    classType: (state, action) => {
      state.input.classType = action.payload;
    },
    sortOrder: (state, action) => {
      state.input.sortOrder = action.payload;
    },
    ininerType: (state, action) => {
      state.input.itineraryType = action.payload;
    },
    priceMin: (state, action) => {
      state.input.priceMin = action.payload;
    },
    priceMax: (state, action) => {
      state.data.priceMax = action.payload;
    },
    numOfpassengers: (state, action) => {
      state.input.numberOfPassengers = action.payload;
    },
    numofStops: (state, action) => {
      state.input.numberOfStops = action.payload;
    },
  },
});
export const {
  departureDate,
  returnDate,
  locDeparture,
  locArrival,
  ininerType,
  sortOrder,
  priceMax,
  priceMin,
  numOfpassengers,
  numofStops,
} = flightSlice.actions;
export const flightReducer = flightSlice.reducer;
