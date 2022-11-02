import React, { useState, useEffect } from "react";

export const usePointerClockHours = () => {
  // храним актуальное время
  const [getHours, setHours] = useState<number>(1);

  let data = new Date();
  let hours = data.getHours();

  useEffect(() => {
    setHours(hours);
  }, []);

  return {
    getHours,
  };
};
