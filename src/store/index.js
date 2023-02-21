import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./Slices/carSlice";
import { flightReducer } from "./Slices/flightSlice";
import { hotelReducer } from "./Slices/hotelSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { flightsApi } from "./apis/flightsapi";
import { carsApi } from "./apis/carsapi";
import { hotelsApi } from "./apis/hotelsapi";
import { formReducer } from "./Slices/formSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    cars: carsReducer,
    flights: flightReducer,
    form: formReducer,
    [flightsApi.reducerPath]: flightsApi.reducer,
    [carsApi.reducerPath]: carsApi.reducer,
    [hotelsApi.reducerPath]: hotelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(flightsApi.middleware)
      .concat(carsApi.middleware)
      .concat(hotelsApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  departureDate,
  returnDate,
  locDeparture,
  locArrival,
  ininerType,
  flightsData,
  classTypes,
  handleFlightSegment
} from "./Slices/flightSlice";
export {
  handleNumOfAdults,
  handleNumOfkids,
  handleLocEnd,
  handleLocStart,
  handleitineraryType,
  handleClassType
} from "./Slices/formSlice";
export { useFetchRoundTripFlightsQuery } from "./apis/flightsapi";
export { useFetchCarsQuery } from "./apis/carsapi";
export { useFetchHotelsQuery } from "./apis/hotelsapi";
