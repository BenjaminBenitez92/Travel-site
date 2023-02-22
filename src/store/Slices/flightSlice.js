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
      id:""
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
    departDateInfo:{
      date:"",
      time:[]
    },
    arrivalDateInfo:{
      date:"",
      time: []
    },
    pricedItinerary:[],
    
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
    },
    handlePricedItinerary: (state, action) =>{
      state.pricedItinerary.push(action.payload)
    },
    handleID: (state, action) =>{
      state.input.id= action.payload
    },
    handleDepartInfo: (state, action) =>{
     const [date, time]= action.payload.split("T")
      let [hh, mm]=time.split(":")
      let dd = "AM"
      let h = hh
      
      if(h>=12){
        h= hh-12
        dd="PM"
      }
      if(h==0){
        h=12
      }
      let format = ( h + ":" + mm + dd)
      state.departDateInfo.time.push(format)
      state.departDateInfo.date = date
    },
    handleArrvailInfo: (state, action) =>{
      const [date, time]= action.payload.split("T")
      let [hh, mm]=time.split(":")
      let dd = "AM"
      let h = hh
      
      if(h>=12){
        h= hh-12
        dd="PM"
      }
      if(h==0){
        h=12
      }
      let format = ( h + ":" + mm + dd)
      state.arrivalDateInfo.time.push(format)
      state.arrivalDateInfo.date = date
    }
  }
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
  handleFlightSegment,
  handleDepartInfo,
  handleArrvailInfo,
  handlePricedItinerary,
  handleID
} = flightSlice.actions;
export const flightReducer = flightSlice.reducer;
