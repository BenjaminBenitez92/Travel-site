import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const flightsApi = createApi({
  reducerPath: "flight",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://priceline-com-provider.p.rapidapi.com",
  }),
  endpoints: (builder) => {
    return {
      fetchFlights: builder.query({
        query: (input) => {
          return {
            url: "/v1/flights/search",
            method: "GET",
            params: {
              date_departure: input.dateDeparture, //string
              date_departure_return: input.dateReturn, //string
              location_departure: input.locationDeparture, //string
              location_arrival: input.locationArrival, //string
              class_type: input.classType, //string
              sort_order: "PRICE", //string
              itinerary_type: input.itineraryType, //string
              price_min: 1, //number
              price_max: 2500, //number
              number_of_passengers: input.numOfpassengers,
              number_of_stop: 0, // number
            },
            headers: {
              "X-RapidAPI-Key":
                "aec57077b7mshe7c9917e3720dc3p12dae9jsn6c72418df371",
              "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
            },
          };
        },
      }),
    };
  },
});

export const { useFetchFlightsQuery } = flightsApi;
export { flightsApi };
