import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const hotelsApi = createApi({
  reducerPath: "hotels",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://priceline-com-provider.p.rapidapi.com",
  }),
  endpoints: (builder) => {
    return {
      fetchHotels: builder.query({
        query: () => {
          return {
            url: "/v1/hotels/search",
            method: "GET",
            params: {
              date_checkin: "2023-07-18",
              date_checkout: "2023-07-23",
              sort_order: "HDR",
              location_id: "3000035821",
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

export const { useFetchHotelsQuery } = hotelsApi;
export { hotelsApi };
