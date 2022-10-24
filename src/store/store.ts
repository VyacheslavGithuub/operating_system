import { weatherAPI } from "./reducers/WeatherSlice/WeatherAPI";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import InputSlice from "./reducers/InputSlice/InputSlice";
import NotesSlice from "./reducers/NotesSlice/NotesSlice";

const rootReducer = combineReducers({
  InputSlice,
  NotesSlice,
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
