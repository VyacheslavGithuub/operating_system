import styled from "styled-components";

interface IAppSCProps {
  isAuth: boolean;
  isVisible: boolean;
  windowInnerHeight?: number;
  lg: string;
  md: string;
  sm: string;
}

const AppSC = styled.div<IAppSCProps>`
  height: 100vh;
  color: ${(props) => props.theme.main};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: url(${({ lg }) => lg}) 50% 50% no-repeat;
  background-size: ${({ isVisible, isAuth }) =>
    isVisible && !isAuth ? "120% 120%" : "100% 100%"};

  transition: background 0.2s ease;

  @media (max-width: 1025px) {
    background: url(${({ md }) => md}) 50% 50% no-repeat;
    background-size: ${({ isVisible, isAuth }) =>
      isVisible && !isAuth ? "120% 120%" : "100% 100%"};
  }
  @media (max-width: 600px) {
    height: ${({ windowInnerHeight }) => windowInnerHeight + "px"};

    background: url(${({ sm }) => sm}) 50% 50% no-repeat;
    background-size: ${({ isVisible, isAuth }) =>
      isVisible && !isAuth ? "105% 105%" : "100% 100%"};
  }
`;

export const useAppStyle = () => ({
  AppSC,
});
