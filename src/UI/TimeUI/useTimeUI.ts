import React, { useEffect, useState } from "react";

export const useTimeUI = () => {
  const [isTime, setTime] = useState<string>();
  console.log(isTime);

  const FTime = () => {
    let data = new Date();
    let hours: number = data.getHours();
    let minutes: number = data.getMinutes();
    setTime(("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2));
  };

  useEffect(() => {
    setInterval(FTime, 1000);
  }, []);

  return {
    isTime,
  };
};
