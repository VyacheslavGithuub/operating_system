import styled from "styled-components";

const PointerClockSC = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  fill: ${({ theme }) => theme.WotchCircle};
`;
const PointerClockShieldSC = styled.div`
  z-index: 0;
  width: 50px;
  fill: ${({ theme }) => theme.WotchShield};
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
`;
const PointerClockShieldLvl2SC = styled.div`
  z-index: 6;
  width: 35px;
  fill: ${({ theme }) => theme.WotchShieldV2};

  position: absolute;
  top: calc(50% - 17px);
  left: calc(50% - 17px);
`;
const PointerClockHourSC = styled.div<{ hours?: number }>`
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
  transform: rotate(${({ hours }) => hours && hours * 15 + "deg"});
`;
const PointerClockMinutSC = styled.div<{ minuts?: number }>`
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
const PointerClockSecondSC = styled.div<{ second?: number }>`
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

export const usePointerClockStyle = () => ({
  PointerClockSC,
  PointerClockHourSC,
  PointerClockMinutSC,
  PointerClockSecondSC,
  PointerClockShieldSC,
  PointerClockShieldLvl2SC,
});
