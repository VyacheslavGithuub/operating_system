import styled from "styled-components";

const AppSC = styled.div<{ isVisible: boolean }>`
  min-height: 100vh;
  background: url(https://images.wallpaperscraft.ru/image/single/les_derevya_tuman_110131_1920x1080.jpg)
    50% 50% no-repeat;
  background-size: ${({ isVisible }) =>
    isVisible ? "120% 120%" : "100% 100%"};
  height: 500px;
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
  width: 100vw;
  height: 100%;
  backdrop-filter: blur(${({ isVisible }) => isVisible + "px"});
  /* backdrop-filter: ${({ isVisible }) =>
    isVisible ? "blur(7px)" : "blur(0)"}; */
  /* box-shadow: 2px 2px 4px rgb(0 0 0 / 25%); */
`;

export const useAppStyle = () => ({
  AppSC,
  AppBlurSC,
});
