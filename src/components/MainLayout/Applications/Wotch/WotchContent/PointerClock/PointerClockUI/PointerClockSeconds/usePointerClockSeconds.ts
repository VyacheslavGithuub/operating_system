import React, { useEffect, useState } from "react";

export const usePointerClockSeconds = () => {
  const [getSeconds, setSeconds] = useState<number>();

  const FGetSeconds = () => setSeconds(new Date().getSeconds());

  useEffect(() => {
    FGetSeconds();
  }, []);

  useEffect(() => {
    setTimeout(FGetSeconds, 1000);
  }, [getSeconds]);

  return {
    getSeconds,
  };
};
