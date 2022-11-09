import React, { useEffect, useState } from "react";

export const useMrCoder = () => {
  const [MrState, setMrState] = useState<string>("");

  useEffect(() => {
    const data = new Date();
    const hours = data.getHours();
    const day = data.getDay();
    if (hours >= 0) {
      setMrState("snake");
    }
    if (hours > 8) {
      setMrState("panda");
    }
    if (hours > 18) {
      setMrState("seal");
    }
    if (day === 0 || day === 1) {
      setMrState("rat");
    }
  }, []);
  return { MrState };
};
