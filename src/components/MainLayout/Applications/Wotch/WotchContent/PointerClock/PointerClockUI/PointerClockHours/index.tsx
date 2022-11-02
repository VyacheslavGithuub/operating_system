import React from "react";
import { usePCHoursStyle } from "./style";
import { usePointerClockHours } from "./usePointerClockHours";

const PointerClockHours = () => {
  const { HoursSC } = usePCHoursStyle();
  const { getHours } = usePointerClockHours();
  return <HoursSC hours={getHours} />;
};

export default PointerClockHours;
