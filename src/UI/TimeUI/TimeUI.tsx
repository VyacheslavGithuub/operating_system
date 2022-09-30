import React, { useEffect, useState } from "react";
import { useTimeUIStyle } from "./style";

const TimeUI = () => {
  const [isTime, setTime] = useState<any>();

  useEffect(() => {
    setTime(new Date().getHours() + ":" + new Date().getMinutes());
    setInterval(() => {
      setTime(new Date().getHours() + ":" + new Date().getMinutes());
    }, 1000);
  }, []);

  const { TimeSC } = useTimeUIStyle();
  return <TimeSC>{isTime}</TimeSC>;
};

export default React.memo(TimeUI);
