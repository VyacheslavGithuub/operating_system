import styled from "styled-components";

const HoursSC = styled.div<{ hours: number }>`
  z-index: 1;
  width: 10px;
  height: 250px;
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    rgba(75, 73, 72, 0) 47%,
    ${({ theme }) => theme.WotchHour}
  );

  position: absolute;
  top: calc(50% - 125px);
  left: calc(50% - 5px);
  transform: rotate(${({ hours }) => hours && hours * 30 + "deg"});
`;

export const usePCHoursStyle = () => ({
  HoursSC,
});
