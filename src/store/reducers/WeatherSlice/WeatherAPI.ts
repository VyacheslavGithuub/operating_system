import { IDataWeather } from "./types.d";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const weatherAPI = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.weatherstack.com/" }),
  endpoints: (build) => ({
    getDataWeather: build.query<IDataWeather, "">({
      query: () => ({
        url: `current?access_key=af3a4c8a04784239afd4e8fa45d7de03&query=New%20York`,
      }),
    }),
  }),
});

export const { useGetDataWeatherQuery } = weatherAPI;
