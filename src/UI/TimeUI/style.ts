import styled from "styled-components";

const TimeSC = styled.time`
  display: flex;
  user-select: none; 
  color: #d2dae2;
  font-size: 100px;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  bottom: 50px;
  left: 50px;
  @media (max-width: 800px) {
    font-size: 80px;
  }
`;
const TimeHours = styled.span``;
const TimeMinutes = styled.span``;

export const useTimeUIStyle = () => ({
  TimeSC,
  TimeHours,
  TimeMinutes,
});
