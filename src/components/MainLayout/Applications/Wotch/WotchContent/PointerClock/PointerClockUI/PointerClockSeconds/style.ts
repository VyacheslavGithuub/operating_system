import styled from "styled-components";

const SecondsSC = styled.div<{ second: number | undefined }>`
  background-color: ${({ theme }) => theme.WotchMinute};
  z-index: 3;
  width: 10px;
  height: 250px;
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    rgba(75, 73, 72, 0) 47%,
    ${({ theme }) => theme.WotchSecond}
  );

  position: absolute;
  top: calc(50% - 125px);
  left: calc(50% - 5px);
  transform: rotate(${({ second }) => second && second * 6 + "deg"});
`;

export const usePCSecondsStyle = () => ({
  SecondsSC,
});
