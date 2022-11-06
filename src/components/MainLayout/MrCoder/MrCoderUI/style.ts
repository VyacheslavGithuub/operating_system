import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0%{transform: rotate(0deg)}
  25%{transform: rotate(20deg)}
  50%{transform: rotate(-20deg)}
  100%{transform: rotate(0deg)}
`;

const MrChildrenSC = styled.div<{ isActive: boolean }>`
  animation: ${({ isActive }) => isActive && animation} 1s;
  &:hover {
    cursor: pointer;
  }
`;
//значения по умолчанию для seal
const NarrativeCloudSC = styled.div<{ type: string }>`
  width: max-content;
  display: flex;
  align-items: center;
  padding: 7px 10px 12px 10px;
  background: ${({ theme }) => theme.BagWeatherBlock};
  position: relative;
  top: ${({ type }) =>
    type === "snake" ? " 17px" : type === "panda" ? "70px" : " 36px"};
  left: ${({ type }) =>
    type === "snake" ? "92px" : type === "panda" ? "100px" : " 55px"};
  border-radius: 10px 10px 10px 0px;

  &:before {
    content: "";
    position: absolute;
    right: 100%;
    bottom: 0px;
    width: 0;
    height: 0;
    border-bottom: 13px solid ${({ theme }) => theme.BagWeatherBlock};
    border-left: 13px solid transparent;
  }
`;

export const useMrCoderUIStyle = () => ({
  MrChildrenSC,
  NarrativeCloudSC,
});
