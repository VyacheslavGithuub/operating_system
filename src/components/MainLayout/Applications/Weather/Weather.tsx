import React from "react";
import { useGetDataWeatherQuery } from "../../../../store/reducers/WeatherSlice/WeatherAPI";
import SkeletonUI from "../../../../UI/SkeletonUI/SkeletonUI";
import TimeUI from "../../../../UI/TimeUI/TimeUI";
import { useWeatherStyle } from "./style";

const Weather = () => {
  const {
    WeatherContainerSC,
    WeatherCitySC,
    WeatherIconSC,
    WeatherTemperatureSC,
    WeatherWrapSC,
    WeatherBlockCity,
    WeatherTimeSC,
    WeatherMainContentSC,
    WeatherTapeSC,
    WeatherTopSC,
  } = useWeatherStyle();
  const { data, isLoading, error } = useGetDataWeatherQuery("");

  let newDate = { ...data?.list };

  return (
    <WeatherContainerSC>
      {error && <h2>WeatherAPI Error!</h2>}
      {isLoading ? (
        <SkeletonUI radius="15" />
      ) : (
        data && (
          <WeatherWrapSC>
            {/* <WeatherTopSC>
              <div>
                <WeatherBlockCity>
                  <WeatherCitySC>{data.city.name}</WeatherCitySC>
                </WeatherBlockCity>
                <WeatherMainContentSC>
                  <div>Влажность: {data?.list[0].main.humidity} %</div>
                  <div>Давление: {data.list[0].main.pressure} гПа</div>
                  <div>Направление ветра: {data.list[0].wind.deg}</div>
                  <div>Ветер: {data.list[0].wind.speed} м/сек</div>
                </WeatherMainContentSC>
              </div>
              <div>
                <WeatherIconSC
                  src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
                  alt="icon"
                />
                <WeatherTemperatureSC>
                  {Math.round(data.list[0].main.temp - 273)}°
                </WeatherTemperatureSC>
                <WeatherTimeSC>
                  <TimeUI />
                </WeatherTimeSC>
              </div>
            </WeatherTopSC> */}
            <WeatherTapeSC>
              {data.list.map((i, index) => (
                <div key={index}>
                  <div>{i.dt_txt}</div>
                  <img
                    src={`https://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <div>{i.main.temp_min}</div>
                  <div>{i.main.temp_max}</div>
                </div>
              ))}
            </WeatherTapeSC>
          </WeatherWrapSC>
        )
      )}
    </WeatherContainerSC>
  );
};

export default React.memo(Weather);
