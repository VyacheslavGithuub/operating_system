import styled from "styled-components";

const AppSC = styled.div<{ isVisible: boolean }>`
  background: url(https://images.wallpaperscraft.ru/image/single/les_derevya_tuman_110131_1920x1080.jpg)
    50% 50% no-repeat;
  background-size: ${({ isVisible }) =>
    isVisible ? "120% 120%" : "100% 100%"};
  min-height: 100vh;
  transition: background 0.2s ease;
  @media (max-width: 1025px) {
    background: url(https://images.wallpaperscraft.ru/image/single/les_derevya_tuman_110131_1024x600.jpg)
      50% 50% no-repeat;
    background-size: ${({ isVisible }) =>
      isVisible ? "120% 120%" : "100% 100%"};
  }
  @media (max-width: 600px) {
    background: url(https://images.wallpaperscraft.ru/image/single/les_derevya_tuman_110131_800x1200.jpg)
      50% 50% no-repeat;
    background-size: ${({ isVisible }) =>
      isVisible ? "120% 120%" : "100% 100%"};
  }
`;
const AppBlurSC = styled.div<{ isVisible?: number }>`
  width: calc(100vw - 0px);
  height: calc(100vh - 0px);
  backdrop-filter: blur(${({ isVisible }) => isVisible + "px"});
  /* backdrop-filter: ${({ isVisible }) =>
    isVisible ? "blur(7px)" : "blur(0)"}; */
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
`;

export const useAppStyle = () => ({
  AppSC,
  AppBlurSC,
});
