import styled from "styled-components";

// import { baseTheme } from 'styles/theme'

// const StyledHeader = styled.header`
//   background-color: ${baseTheme.colors.secondary};
//   height: ${baseTheme.sizes.header.height}px;
//   z-index: ${baseTheme.order.header};
// `

const WeatherContainerSC = styled.div`
  width: 100%;
  height: 500px;
  /* color: ; */
`;

export const useWeatherStyle = () => ({
  WeatherContainerSC,
});
