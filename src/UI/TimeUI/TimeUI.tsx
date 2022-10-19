import React, { useEffect, useState } from "react";
import { useTimeUIStyle } from "./style";

// interface ITimeUIProps {
//   isVisible: boolean;
// }
const TimeUI = () => {
  const { TimeSC } = useTimeUIStyle();
  const [isTime, setTime] = useState<any>();

  const FTime = () => {
    let data = new Date();
    let hours: any = data.getHours();
    let minutes: any = data.getMinutes();

    setTime(("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2));
    setInterval(() => {
      setTime(("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2));
    }, 1000);
  };

  useEffect(() => {
    FTime();
  }, [isTime]);

  return <TimeSC>{isTime}</TimeSC>;
};

export default React.memo(TimeUI);
