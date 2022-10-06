import styled from "styled-components"

const LoginPageSC = styled.div<{ isVisible: boolean }>`
  background: url(https://images.wallpaperscraft.ru/image/single/paporotnik_list_rastenie_zelenyj_119970_1920x1080.jpg)
    50% 50% no-repeat;
  background-size: ${({ isVisible }) =>
    isVisible ? "120% 120%" : "100% 100%"};
  min-height: 100vh;
  transition: background 0.3s ease;
  @media (max-width: 800px) {
    background-image: url(https://images.wallpaperscraft.ru/image/single/paporotnik_list_rastenie_zelenyj_119970_800x1200.jpg);
  }
`;
const LoginPageBlurSC = styled.div<{ isVisible: boolean }>`
  width: calc(100vw - 0px);
  height: calc(100vh - 0px);

  backdrop-filter: ${({ isVisible }) =>
    isVisible ? "blur(10px)" : "blur(0px)"};
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
`;
const LoginPageFormSC = styled.div<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  position: absolute;
  top: calc(50% - 80px);
  left: calc(50% - 103px);
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 0.1s ease;
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
`;

export const useLoginPageStyle = () => ({
  LoginPageSC,
  LoginPageBlurSC,
  LoginPageFormSC,
  EnterPinSC,
  CancelSC,
});

