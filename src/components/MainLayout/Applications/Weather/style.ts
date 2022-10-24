import styled from "styled-components";

const WeatherContainerSC = styled.div`
  width: 100%;
  font-size: 22px;
  height: 300px;

  @media (max-width: 1200px) {
    height: 260px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
  @media (max-width: 450px) {
    height: 205px;
  }
`;
const WeatherCitySC = styled.div`
  font-size: 50px;
  font-family: roboto;
  position: relative;

  @media (max-width: 1200px) {
    font-size: 3.5rem;
    top: 5px;
  }
  @media (max-width: 800px) {
    font-size: 3rem;
    top: 10px;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
    top: 15px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
    top: 10px;
  }
`;
const WeatherIconSC = styled.img`
  position: absolute;

  width: 170px;
  top: -30px;
  right: -15px;

  @media (max-width: 800px) {
    width: 180px;
    top: -40px;
    right: -10px;
  }
  @media (max-width: 600px) {
    width: 120px;
    top: -20px;
    right: -10px;
  }
  @media (max-width: 450px) {
    width: 100px;
    top: -20px;
    right: -10px;
  }
`;
const WeatherTemperatureSC = styled.div`
  font-size: 50px;
  font-family: cursive;

  position: absolute;
  top: 25px;
  right: 120px;

  @media (max-width: 800px) {
    font-size: 3.5rem;
    top: 15px;
    right: 130px;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
    top: 20px;
    right: 90px;
  }
  @media (max-width: 450px) {
    font-size: 40px;
    top: 7px;
    right: 70px;
  }
`;
const WeatherWrapSC = styled.div`
  display: flex;
  flex-direction: column;
`;
const IconRightArrowPos = styled.div`
  position: relative;
  bottom: 2px;
  right: 2px;
  fill: ${(props) => props.theme.BagSmallCard};
  transform: rotate(180deg);

  @media (max-width: 450px) {
    bottom: 3px;
    right: 2px;
  }
`;

const WeatherBlockCity = styled.div`
  display: flex;
  align-items: center;
`;
const WeatherButtonExitSC = styled.div`
  position: relative;
  top: 200px;

  @media (max-width: 1200px) {
    top: 165px;
  }
  @media (max-width: 450px) {
    top: 130px;
  }
`;
const WeatherTimeSC = styled.div`
  position: absolute;
  font-size: 23px;
  top: 100px;
  right: 40px;

  @media (max-width: 800px) {
    font-size: 2rem;
    top: 80px;
    left: 20px;
    width: max-content;
  }
  @media (max-width: 600px) {
    font-size: 1.7rem;
    top: 60px;
    left: 45px;
  }
  @media (max-width: 450px) {
    font-size: 23px;
    top: 45px;
    left: 25px;
  }
`;
const WeatherMainContentSC = styled.div`
  position: relative;
  font-size: 25px;
  top: 62px;

  @media (max-width: 1200px) {
    font-size: 25px;
  }
  @media (max-width: 600px) {
    top: 100px;
    font-size: 20px;
  }
  @media (max-width: 450px) {
    top: 80px;
    font-size: 16px;
  }
`;
const WeatherTapeSC = styled.div`
  display: flex;
`;
const WeatherTopSC = styled.div`
  display: flex;
`;
const WeatherIsDaySC = styled.div``;

export const useWeatherStyle = () => ({
  WeatherTopSC,
  WeatherTapeSC,
  WeatherCitySC,
  WeatherIconSC,
  WeatherWrapSC,
  WeatherTimeSC,
  WeatherIsDaySC,
  WeatherBlockCity,
  IconRightArrowPos,
  WeatherContainerSC,
  WeatherButtonExitSC,
  WeatherTemperatureSC,
  WeatherMainContentSC,
});
