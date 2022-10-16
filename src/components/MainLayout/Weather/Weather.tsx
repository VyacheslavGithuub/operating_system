import React from "react";
import { useGetDataWeatherQuery } from "../../../store/reducers/WeatherSlice/WeatherAPI";
import SkeletonUI from "../../../UI/SkeletonUI/SkeletonUI";
import { useWeatherStyle } from "./style";

const Weather = () => {
  const {
    WeatherContainerSC,
    WeatherCitySC,
    WeatherIconSC,
    WeatherTemperatureSC,
    WeatherIsDaySC,
  } = useWeatherStyle();
  const { data, isLoading } = useGetDataWeatherQuery("");
  console.log(data);

  return (
    <>
      <WeatherContainerSC>
        {isLoading ? (
          <SkeletonUI radius="15" />
        ) : (
          <>
            <WeatherCitySC>{data?.location.name}</WeatherCitySC>
            <WeatherIconSC>
              <img src={data?.current.weather_icons[0]} alt="NoIcon" />
            </WeatherIconSC>
            {/* описания погоды */}
            <div>{data?.current.weather_descriptions[0]}</div>
            <WeatherTemperatureSC>
              <span>{data?.current.temperature}°</span>
            </WeatherTemperatureSC>
            <WeatherIsDaySC>
              {/* {data?.current.is_day === "yes" ? <p>Утро</p> : <p></p>} */}
            </WeatherIsDaySC>

            {/* влажность */}
            <div>{data?.location.localtime}</div>
            {/* осадок */}
            {/* <div>{data?.current.precip}</div> */}
          </>
        )}
        {/* давление */}
        {/* <div>{data?.current.pressure}</div> */}
        {/* градус ветра */}
        {/* <div>{data?.current.pressure}</div> */}
        {/* направление ветра */}
        {/* <div>{data?.current.wind_dir}</div> */}
        {/* скорость ветра */}
        {/* <div>{data?.current.wind_speed}</div> */}
        {/* страна */}
        {/* <div>{data?.location.country}</div> */}
        {/* местное время */}
        {/* <div>{data?.location.localtime}</div> */}
      </WeatherContainerSC>
    </>
  );
};

export default React.memo(Weather);
