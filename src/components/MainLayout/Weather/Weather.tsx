import React from "react";
import { useGetDataWeatherQuery } from "../../../store/reducers/WeatherSlice/WeatherAPI";
import { useWeatherStyle } from "./style";

const Weather = () => {
  const { WeatherContainerSC } = useWeatherStyle();
  const { data } = useGetDataWeatherQuery("");

  return (
    <WeatherContainerSC>
      {/* влажность */}
      <div>{data?.current.humidity}</div>
      {/* AM PM */}
      <div>{data?.current.is_day}</div>
      {/* осадок */}
      <div>{data?.current.precip}</div>
      {/* давление */}
      <div>{data?.current.pressure}</div>
      {/* описания погоды */}
      <div>{data?.current.weather_descriptions[0]}</div>
      {/*  иконки погоды */}
      <div>{data?.current.weather_icons[0]}</div>
      {/* градус ветра */}
      <div>{data?.current.pressure}</div>
      {/* направление ветра */}
      <div>{data?.current.wind_dir}</div>
      {/* скорость ветра */}
      <div>{data?.current.wind_speed}</div>
      {/* страна */}
      <div>{data?.location.country}</div>
      {/* местное время */}
      <div>{data?.location.localtime}</div>
      {/* name */}
      <div>{data?.location.name}</div>
    </WeatherContainerSC>
  );
};

export default React.memo(Weather);
