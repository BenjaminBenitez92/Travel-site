import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./Slices/carSlice";
import { flightReducer } from "./Slices/flightSlice";
import { hotelReducer } from "./Slices/hotelSlice";

export const store = configureStore({
    reducer: {
        hotels: hotelReducer,
        cars: carsReducer,
        flights: flightReducer
    }
})