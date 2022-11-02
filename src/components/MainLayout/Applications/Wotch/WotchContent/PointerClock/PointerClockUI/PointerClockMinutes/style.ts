import styled from "styled-components";

const MinutesSC = styled.div<{ minuts: number }>`
  background-color: ${({ theme }) => theme.WotchMinute};
  z-index: 2;
  width: 10px;
  height: 250px;
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    rgba(75, 73, 72, 0) 47%,
    ${({ theme }) => theme.WotchMinute}
  );

  position: absolute;
  top: calc(50% - 125px);
  left: calc(50% - 5px);
  transform: rotate(${({ minuts }) => minuts && minuts * 6 + "deg"});
`;

export const usePCSecondsStyle = () => ({
  MinutesSC,
});
