import React, { useEffect, useState } from "react";

export const usePointerClock = () => {
  const [getHours, setHours] = useState<number>();
  const [getMinutes, setMinutes] = useState<number>();
  const [getSeconds, setSeconds] = useState<number>();

  const FGetHours = () => setHours(new Date().getHours());
  const FGetMinutes = () => setMinutes(new Date().getMinutes());
  const FGetSeconds = () => setSeconds(new Date().getSeconds());

  setInterval(FGetSeconds, 1000);

  useEffect(() => {
    FGetHours();
    FGetMinutes();
    FGetSeconds();
  }, []);

  useEffect(() => {
    setTimeout(FGetHours, 1000);

    if (getMinutes === 0) {
      FGetHours();
    }
    if (getSeconds === 0) {
      FGetMinutes();
    }
  }, [getSeconds]);

  return {
    getHours,
    getMinutes,
    getSeconds,
  };
};
