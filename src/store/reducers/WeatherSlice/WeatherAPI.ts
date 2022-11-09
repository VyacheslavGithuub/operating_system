import { IWeatherAPI } from "./types.d";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const weatherAPI = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (build) => ({
    getDataWeather: build.query<IWeatherAPI, "">({
      query: () => ({
        url: `weather?lat=44.34&lon=10.99&appid=6ea2de009cb7032a273c4070c985d305`,
      }),
    }),
  }),
});

export const { useGetDataWeatherQuery } = weatherAPI;


//lat={lat}&lon={lon}&appid={API key}
