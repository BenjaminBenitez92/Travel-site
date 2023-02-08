import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const carsApi = createApi({
  reducerPath: "cars",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://priceline-com-provider.p.rapidapi.com",
  }),
  endpoints: (builder) => {
    return {
      fetchCars: builder.query({
        query: () => {
          return {
            url: "/v1/cars-rentals/search",
            method: "GET",
            params: {
              date_time_pickup: "2023-07-22 14:00:00", //string
              date_time_return: "2023-07-23 14:00:00", //string
              location_pickup: "JFK", //string
              location_return: "JFK", //string
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

export const { useFetchCarsQuery } = carsApi;
export { carsApi };
