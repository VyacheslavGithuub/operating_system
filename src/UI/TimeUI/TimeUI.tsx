import React, { useEffect, useState } from "react";
import { useTimeUIStyle } from "./style";

interface ITimeUIProps {
  isVisible: boolean;
}
const TimeUI = ({ isVisible }: ITimeUIProps) => {
  const [isTime, setTime] = useState<any>();

  useEffect(() => {
    setTime(new Date().getHours() + ":" + new Date().getMinutes());
    setInterval(() => {
      setTime(new Date().getHours() + ":" + new Date().getMinutes());
    }, 1000);
  }, []);

  const { TimeSC } = useTimeUIStyle();
  return <TimeSC isVisible={isVisible}>{isTime}</TimeSC>;
};

export default React.memo(TimeUI);
