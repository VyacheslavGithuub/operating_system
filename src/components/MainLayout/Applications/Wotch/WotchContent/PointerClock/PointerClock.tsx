import React from "react";
import IconShield from "../../../../../Icon/IconWotch/IconWotchShield";
import IconWotchCircle from "../../../../../Icon/IconWotch/IconWotchCircle";
import { usePointerClockStyle } from "./style";
import { usePointerClock } from "./usePointerClock";
import PointerClockSeconds from "./PointerClockUI/PointerClockSeconds";
import PointerClockMinutes from "./PointerClockUI/PointerClockMinutes";
import PointerClockHours from "./PointerClockUI/PointerClockHours";

const PointerClock = () => {
  const { PointerClockSC, PointerClockShieldSC, PointerClockShieldLvl2SC } =
    usePointerClockStyle();
  const { rotateShield, handleRotateShield } = usePointerClock();

  return (
    <PointerClockSC rotate={rotateShield}>
      <IconWotchCircle />
      <PointerClockShieldSC>
        <IconShield />
      </PointerClockShieldSC>
      <PointerClockShieldLvl2SC onClick={handleRotateShield}>
        <IconShield />
      </PointerClockShieldLvl2SC>
      <PointerClockHours />
      <PointerClockMinutes />
      <PointerClockSeconds />
    </PointerClockSC>
  );
};

export default React.memo(PointerClock);
