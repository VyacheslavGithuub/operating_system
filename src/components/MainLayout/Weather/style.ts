import styled from "styled-components";

const WeatherContainerSC = styled.div`
  height: 500px;
  border-radius: 15px;
  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
  font-size: 22px;
`;
const WeatherCitySC = styled.div`
  font-size: 3rem;
  font-family: cursive;
`;
const WeatherIconSC = styled.div``;
const WeatherTemperatureSC = styled.div`
  font-size: 3rem;
  font-family: cursive;

  position: absolute;
  top: 1%;
  right: 10%;
`;
const WeatherIsDaySC = styled.div``;

export const useWeatherStyle = () => ({
  WeatherContainerSC,
  WeatherCitySC,
  WeatherIconSC,
  WeatherTemperatureSC,
  WeatherIsDaySC,
});
