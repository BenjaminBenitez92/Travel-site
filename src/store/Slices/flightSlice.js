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

    data: {
      getAirFlightRoundTrip:{
        results:{
          air_search_rsp:{
            airline:[],
            segment:[]

          }
        }
      }
    },
    flightSegment:[],
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
      state.input.locationArrival = action.payload
        .split(",")
        .reverse()
        .join(",");
    },
    classTypes: (state, action) => {
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
    flightsData: (state, action) => {
      state.data = action.payload;
    },
    handleFlightSegment: (state, action) =>{
      
      state.flightSegment.push(action.payload)
    }
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
  flightsData,
  classTypes,
  handleFlightSegment
} = flightSlice.actions;
export const flightReducer = flightSlice.reducer;
