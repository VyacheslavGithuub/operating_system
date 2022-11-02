import styled, { keyframes } from "styled-components";

const rotateShield = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const PointerClockSC = styled.div<{ rotate: boolean }>`
  position: relative;
  width: 300px;
  height: 300px;
  fill: ${({ theme }) => theme.WotchCircle};
  animation: ${({ rotate }) => rotate && rotateShield} 1.5s;
`;
const PointerClockShieldSC = styled.div`
  z-index: 5;
  width: 50px;
  fill: ${({ theme }) => theme.WotchShield};
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  cursor: pointer;
`;
const PointerClockShieldLvl2SC = styled.div`
  z-index: 7;
  width: 35px;
  fill: ${({ theme }) => theme.WotchShieldV2};

  position: absolute;
  top: calc(50% - 17px);
  left: calc(50% - 17px);
  cursor: pointer;
`;

export const usePointerClockStyle = () => ({
  PointerClockSC,
  PointerClockShieldSC,
  PointerClockShieldLvl2SC,
});
