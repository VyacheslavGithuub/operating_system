import styled from "styled-components"

const LoginPageSC = styled.div<{ SwipeDistance: number }>`
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    backdrop-filter: blur(${({ SwipeDistance }) => SwipeDistance / 150 + "px"});
  }
`;
const LoginPageCenterBlock = styled.div`
  position: absolute;
  top: calc(50% - 80px);
  left: calc(50% - 103px);

  @media (max-width: 800px) {
    top: calc(50% - 50px);
    left: calc(50% - 97.5px);
  }
  @media (max-width: 600px) {
    top: calc(50% - 50px);
    left: calc(50% - 75px);
  }
  @media (max-width: 400px) {
    top: calc(50% - 50px);
    left: calc(50% - 64px);
  }
`;
const EnterPinSC = styled.span`
  color: white;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
`;
const CancelSC = styled.span`
  color: #a4b0be;
  &:hover {
    text-decoration: dashed;
    cursor: pointer;
    color: #dfe4ea;
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const LoginPageFormWrapSC = styled.div<{ isAuth: boolean }>`
  visibility: ${({ isAuth }) => (isAuth ? "visible" : "hidden")};
  opacity: ${({ isAuth }) => (isAuth ? "1" : "0")};
  transition: opacity 0.1s ease;
`;
const LoginPageFormSC = styled.div<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 0.1s ease;

  @media (max-width: 400px) {
    width: 128px;
  }
`;
const TimeSC = styled.div<{
  isVisible: boolean;
  SwipeDistance: number;
}>`
  position: absolute;
  bottom: 50px;
  left: ${({ isVisible }) => (isVisible ? "-250px" : "50px")};
  transition: left 0.2s ease;

  @media (max-width: 800px) {
    height: 90px;
    top: 10%;
    left: calc(50% - 97.5px);
  }
  @media (max-width: 600px) {
    height: 75px;
    left: calc(50% - 77.5px);
    top: calc(10% + ${({ SwipeDistance }) => SwipeDistance / 10 + "px"});
    opacity: calc(1 - ${({ SwipeDistance }) => SwipeDistance / 350});
    transition: top 0.1s ease;
  }
  @media (max-width: 400px) {
    height: 55px;
    left: calc(50% - 58.5px);
  }
`;
const AnimatedUpArrowsUISC = styled.div<{
  SwipeDistance: number;
}>`
  position: absolute;
  bottom: calc(10% + ${({ SwipeDistance }) => SwipeDistance / 50 + "px"});
  left: calc(50% - 10px);
  opacity: calc(1 - ${({ SwipeDistance }) => SwipeDistance / 350});
  transition: bottom 0.1s ease;
`;

export const useLoginPageStyle = () => ({
  TimeSC,
  CancelSC,
  EnterPinSC,
  LoginPageSC,
  LoginPageFormSC,
  LoginPageFormWrapSC,
  AnimatedUpArrowsUISC,
  LoginPageCenterBlock,
});

