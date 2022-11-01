import React from "react";
import IconShield from "../../../../../Icon/IconWotch/IconWotchShield";
import IconWotchCircle from "../../../../../Icon/IconWotch/IconWotchCircle";
import { usePointerClockStyle } from "./style";
import { usePointerClock } from "./usePointerClock";

const PointerClock = () => {
  const {
    PointerClockSC,
    PointerClockHourSC,
    PointerClockMinutSC,
    PointerClockSecondSC,
    PointerClockShieldSC,
    PointerClockShieldLvl2SC,
  } = usePointerClockStyle();

  const { getHours, getMinutes, getSeconds } = usePointerClock();
  console.log(getMinutes);

  return (
    <PointerClockSC>
      <IconWotchCircle />
      <PointerClockShieldSC>
        <IconShield />
      </PointerClockShieldSC>
      <PointerClockShieldLvl2SC>
        <IconShield />
      </PointerClockShieldLvl2SC>
      <PointerClockHourSC hours={getHours} />
      <PointerClockMinutSC minuts={getMinutes} />
      <PointerClockSecondSC second={getSeconds} />
    </PointerClockSC>
  );
};

export default React.memo(PointerClock);
