import styled from "styled-components";

const AppSC = styled.div<{ isVisible: boolean; windowInnerHeight?: number }>`
  /* height: ${({ windowInnerHeight }) => windowInnerHeight + "px"}; */
  height: 100vh;
  background: url(https://images.wallpaperscraft.ru/image/single/les_derevya_tuman_110131_1920x1080.jpg)
    50% 50% no-repeat;
  background-size: ${({ isVisible }) =>
    isVisible ? "120% 120%" : "100% 100%"};
  transition: background 0.2s ease;
  @media (max-width: 1025px) {
    background: url(https://images.wallpaperscraft.ru/image/single/les_derevya_tuman_110131_1024x600.jpg)
      50% 50% no-repeat;
    background-size: ${({ isVisible }) =>
      isVisible ? "120% 120%" : "100% 100%"};
  }
  @media (max-width: 600px) {
    background: url(https://i.pinimg.com/564x/ec/d6/cc/ecd6cca6014d2fd35dc08f485b6dc759.jpg)
      50% 50% no-repeat;
    background-size: ${({ isVisible }) =>
      isVisible ? "105% 105%" : "100% 100%"};
  }
`;

export const useAppStyle = () => ({
  AppSC,
});
