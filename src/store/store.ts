import { weatherAPI } from "./reducers/WeatherSlice/WeatherAPI";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import InputSlice from "./reducers/InputSlice/InputSlice";

const rootReducer = combineReducers({
  InputSlice,
  [weatherAPI.reducerPath]: weatherAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(weatherAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
