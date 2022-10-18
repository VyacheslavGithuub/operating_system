import styled from "styled-components";

interface IAppSCProps {
  isAuth: boolean;
  isVisible: boolean;
  windowInnerHeight?: number;
  background: string;
}

const AppSC = styled.div<IAppSCProps>`
  height: 100vh;
  color: ${(props) => props.theme.main};
  background-color: ${({ background }) => background};
  transition: background 0.2s ease;

  background-size: ${({ isVisible, isAuth }) =>
    isVisible && !isAuth ? "120% 120%" : "100% 100%"};

  @media (max-width: 600px) {
    height: ${({ windowInnerHeight }) => windowInnerHeight + "px"};
  }
`;

export const useAppStyle = () => ({
  AppSC,
});
