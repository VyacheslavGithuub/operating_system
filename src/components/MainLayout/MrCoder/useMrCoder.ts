import React, { useEffect, useState } from "react";

export const useMrCoder = () => {
  const [MrState, setMrState] = useState<string>("");

  useEffect(() => {
    const data = new Date();
    const hours = data.getHours();
    if (hours >= 0) {
      setMrState("snake");
    }
    if (hours > 8) {
      setMrState("panda");
    }
    if (hours > 18) {
      setMrState("seal");
    }
  }, []);
  return { MrState };
};
