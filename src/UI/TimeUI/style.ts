import styled from "styled-components";

const TimeSC = styled.time<{ isVisible: boolean }>`
  display: flex;
  user-select: none;
  color: #d2dae2;
  font-size: 100px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 80%;
  position: absolute;
  bottom: 50px;
  left: ${({ isVisible }) => (isVisible ? "-250px" : "50px")};
  transition: left 0.3s ease;

  @media (max-width: 800px) {
    font-size: 80px;
  }
  @media (max-width: 600px) {
    font-size: 60px;
    left: calc(50% - 75px);
  }
  @media (max-width: 400px) {
    font-size: 40px;
    left: calc(50% - 50px);
  }
`;
const TimeHours = styled.span``;
const TimeMinutes = styled.span``;

export const useTimeUIStyle = () => ({
  TimeSC,
  TimeHours,
  TimeMinutes,
});
