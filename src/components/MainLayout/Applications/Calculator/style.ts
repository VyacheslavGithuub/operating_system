import styled from "styled-components";

const CalculatorSC = styled.div`
  width: 100%;
  max-width: 350px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid white;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 14%,
    rgba(195, 34, 81, 1) 100%
  );

  @media (max-width: 400px) {
    border-radius: 10px;
  }
`;
const DisplaySC = styled.div`
  display: flex;
  align-items: end;
  flex-direction: row-reverse;
  height: 40%;
  border-bottom: 1px solid #ffffff;
  color: aliceblue;
  font-size: 70px;
  overflow: auto;
  padding: 0px 15px 0px;
`;
const WorkspaceSC = styled.div`
  display: flex;
  height: 60%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: space-evenly;
`;
const ButtonCalcSC = styled.button`
  width: 75px;
  height: 40px;
  cursor: pointer;
  border: 1px solid black;
  font-size: 22px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.BagWeatherBlock};
  &:nth-child(17) {
    width: 160px;
  }
`;

export const useCalculatorStyle = () => ({
  DisplaySC,
  WorkspaceSC,
  ButtonCalcSC,
  CalculatorSC,
});
