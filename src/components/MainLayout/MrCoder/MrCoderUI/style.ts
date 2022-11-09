import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0%{transform: rotate(0deg)}
  25%{transform: rotate(-10deg)}
  50%{transform: rotate(10deg)}
  75%{transform: rotate(-5deg)}
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
  max-width: 140px;
  display: flex;
  align-items: center;
  padding: 7px 10px 12px 10px;
  background: ${({ theme }) => theme.BagWeatherBlock};
  position: relative;
  top: ${({ type }) =>
    type === "snake"
      ? " 17px"
      : type === "panda"
      ? "70px"
      : type === "rat"
      ? "20px"
      : " 36px"};
  left: ${({ type }) =>
    type === "snake"
      ? "92px"
      : type === "panda"
      ? "100px"
      : type === "rat"
      ? "15px"
      : " 55px"};
  border-radius: 10px 10px 10px
    ${({ type }) => (type === "rat" ? "10px" : "0px")};

  &:before {
    content: "";
    position: absolute;
    right: ${({ type }) => (type === "rat" ? "60px" : "100%")};
    bottom: 0px;
    top: ${({ type }) => type === "rat" && "60px"};
    width: 0;
    height: 0;
    border-bottom: ${({ type }) => (type === "rat" ? "0px" : "13px")} solid
      ${({ theme }) => theme.BagWeatherBlock};
    border-left: 13px solid transparent;
    border-right: ${({ type }) => (type === "rat" ? "11px" : "0px")} solid
      transparent;
    border-top: ${({ type }) => (type === "rat" ? "15px" : "0px")} solid
      ${({ theme }) => theme.BagWeatherBlock};
  }
`;

export const useMrCoderUIStyle = () => ({
  MrChildrenSC,
  NarrativeCloudSC,
});
