import React, { useEffect, useState } from "react";

export const usePointerClock = () => {
  const [rotateShield, setRotateShield] = useState<boolean>(false);

  // Прокрутить щит
  const handleRotateShield = () => {
    setRotateShield(true);
    setTimeout(setRotateShield, 1500, false);
  };

  return {
    rotateShield,
    handleRotateShield,
  };
};

