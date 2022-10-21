import React from "react";
import { useGetDataWeatherQuery } from "../../../store/reducers/WeatherSlice/WeatherAPI";
import SkeletonUI from "../../../UI/SkeletonUI/SkeletonUI";
import TimeUI from "../../../UI/TimeUI/TimeUI";
import {
  putVisible_pinCode,
  putAuth,
  putBlur,
} from "../../../store/reducers/InputSlice/InputSlice";
import { useWeatherStyle } from "./style";
import { useAppDispatch } from "../../../store/hooks/redux";
import TransparentButtonUI from "../../../UI/TransparentButtonUI/TransparentButtonUI";
import IconRightArrow from "../../Icon/IconRightArrow";

const Weather = () => {
  const {
    WeatherContainerSC,
    WeatherCitySC,
    WeatherIconSC,
    WeatherTemperatureSC,
    WeatherIsDaySC,
    IconRightArrowPos,
    WeatherWrapSC,
    WeatherBlockCity,
    WeatherButtonExitSC,
    WeatherTimeSC,
    WeatherMainContentSC,
  } = useWeatherStyle();
  const { data, isLoading, error } = useGetDataWeatherQuery("");

  const dispatch = useAppDispatch();
  const handleCloses = () => {
    dispatch(putAuth(false));
    dispatch(putBlur(false));
    dispatch(putVisible_pinCode(false));
  };

  return (
    <WeatherContainerSC>
      {error && <h2>WeatherAPI Error!</h2>}
      {isLoading ? (
        <SkeletonUI radius="15" />
      ) : (
        data && (
          <WeatherWrapSC>
            <div>
              <WeatherBlockCity>
                <WeatherCitySC>{data.city.name}</WeatherCitySC>
              </WeatherBlockCity>
              <WeatherMainContentSC>
                {/* <div>Последнее обновление: {data?.list[0].dt_txt}</div> */}
                <div>Влажность: {data?.list[0].main.humidity} %</div>
                <div>Давление: {data.list[0].main.pressure} гПа</div>
                {/* <div>Описанеи: {data.list[0].weather[0].description}</div> */}
                {/*градусы (метеорологические) */}
                <div>Направление ветра: {data.list[0].wind.deg}</div>
                <div>Ветер: {data.list[0].wind.speed} м/сек</div>
              </WeatherMainContentSC>
            </div>
            <div>
              {/* Иконка */}
              <WeatherIconSC
                src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
                alt="icon"
              />
              {/* Температура */}
              <WeatherTemperatureSC>
                {Math.round(data.list[0].main.temp - 273)}°
              </WeatherTemperatureSC>
              {/* Время */}
              <WeatherTimeSC>
                <TimeUI />
              </WeatherTimeSC>
              {/* Выход */}
              <WeatherButtonExitSC>
                <TransparentButtonUI onClick={handleCloses} size="small">
                  <IconRightArrowPos>
                    <IconRightArrow />
                  </IconRightArrowPos>
                </TransparentButtonUI>
              </WeatherButtonExitSC>
            </div>
          </WeatherWrapSC>
        )
      )}
    </WeatherContainerSC>
  );
};

export default React.memo(Weather);
