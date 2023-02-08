import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const flightsApi = createApi({
  reducerPath: "flights",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://priceline-com-provider.p.rapidapi.com",
  }),
  endpoints: (builder) => {
    return {
      fetchFlights: builder.query({
        query: () => {
          return {
            url: "/v1/flights/search",
            method: "GET",
            params: {
              date_departure: "2023-07-22",//string
              date_departure_return: "2023-07-30",//string
              location_departure: "LAX",//string
              location_arrival: "NYC",//string
              class_type: "ECO",//string
              sort_order: "PRICE",//string
              itinerary_type: "ROUND_TRIP",//string
              price_min: "",//number
              price_max: "",//number
              number_of_passengers: "",//number
              number_of_stop: ""// number
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
