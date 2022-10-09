import styled from "styled-components"

const LoginPageSC = styled.div`
  width: 100%;
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
  numberYPosition: number;
  numberYOpacity: number;
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
  }
  @media (max-width: 400px) {
    height: 55px;
    left: calc(50% - 58.5px);
    top: calc(10% + ${({ numberYPosition }) => numberYPosition + "px"});
    opacity: calc(1 - ${({ numberYOpacity }) => numberYOpacity});
    transition: top 0.1s ease;
  }
`;
const AnimatedUpArrowsUISC = styled.div<{
  numberYPosition: number;
  numberYOpacity: number;
}>`
  position: absolute;
  bottom: calc(10% + ${({ numberYPosition }) => numberYPosition + "px"});
  left: calc(50% - 10px);
  opacity: calc(1 - ${({ numberYOpacity }) => numberYOpacity});
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

