import React from "react";
import { useTimeUIStyle } from "./style";
import { useTimeUI } from "./useTimeUI";

const TimeUI = () => {
  const { TimeSC } = useTimeUIStyle();
  const { isTime } = useTimeUI();
  return <TimeSC>{isTime}</TimeSC>;
};

export default React.memo(TimeUI);
