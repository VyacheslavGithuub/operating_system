import React from "react";
import { usePCSecondsStyle } from "./style";
import { usePointerClockMinutes } from "./usePointerClockMinutes";

const PointerClockMinutes = () => {
  const { MinutesSC } = usePCSecondsStyle();
  const { getMinutes } = usePointerClockMinutes();
  return <MinutesSC minuts={getMinutes} />;
};

export default PointerClockMinutes;
