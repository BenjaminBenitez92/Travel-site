import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const flightsApi = createApi({
  reducerPath: "flight",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://priceline-com-provider.p.rapidapi.com",
  }),
  endpoints: (builder) => {
    return {
      fetchRoundTripFlights: builder.query({
        query: (input) => {
          return {
            url: "/v2/flight/roundTrip",
            method: "GET",
            params: {
              departure_date: input.dateDeparture, //string
              sid: input.id,
              origin_airport_code: input.locationDeparture, //string
              destination_airport_code: input.locationArrival, //string
              cabin_class: input.classType, //string
              adults: 1,
              number_of_itineraries: 50,
            },
            headers: {
              "X-RapidAPI-Key":
                "ccf57ed79dmshe009ffc1d805f88p1bc4ddjsn6ece6875b91d",
              "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
            },
          };
        },
      }),
    };
  },
});
console.log()
export const { useFetchRoundTripFlightsQuery } = flightsApi;
export { flightsApi };
