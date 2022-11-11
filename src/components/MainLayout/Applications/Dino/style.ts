import styled, { keyframes } from "styled-components";

interface IDinoProps {
  statePlay?: boolean;
  stateDino?: boolean;
}

const animMovLeft = keyframes`
  0%{
    right: 0px;
  }
  100%{
    right: 100%;
  }
`;
const jump = keyframes`
  0%{bottom: 0px}
  50%{bottom: 70px}
  100%{bottom: 0px}
`;

const DinoWrapSC = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0px 0px;
  overflow: hidden;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.9836309523809523) 62%,
    rgba(34, 164, 195, 1) 100%
  );
`;
const DinosaurSC = styled.div<IDinoProps>`
  position: absolute;
  bottom: 0px;
  left: 15px;

  z-index: 1;
  animation: ${({ stateDino }) => stateDino && jump} 0.4s linear;
`;
const CactusSC = styled.div<IDinoProps>`
  position: absolute;
  bottom: 0px;
  right: 0px;

  z-index: 1;
  animation: ${({ statePlay }) => statePlay && animMovLeft} 1.5s infinite linear;
`;
const DinoPauseSC = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  fill: ${({ theme }) => theme.BagSmallCard};
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.5s;
  &:hover {
    fill: ${({ theme }) => theme.PauseHover};
  }
`;
const DinoClaudSC = styled.div<IDinoProps>`
  position: absolute;
  right: 0px;
  top: 100px;

  fill: #f1f2f6;
  animation: ${({ statePlay }) => statePlay && animMovLeft} 8s infinite linear;
`;
const TreadmillSC = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;

  width: 100%;
  height: 25px;
  border: 1px solid;
  z-index: 0;
  background-color: #e58e26;
`;

export const useDinoStyle = () => ({
  DinoWrapSC,
  DinosaurSC,
  DinoPauseSC,
  DinoClaudSC,
  TreadmillSC,
  CactusSC,
});
