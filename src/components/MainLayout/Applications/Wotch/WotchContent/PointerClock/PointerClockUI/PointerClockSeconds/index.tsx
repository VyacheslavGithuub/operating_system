import React from "react";
import { usePCSecondsStyle } from "./style";
import { usePointerClockSeconds } from "./usePointerClockSeconds";

const PointerClockSeconds = () => {
  const { SecondsSC } = usePCSecondsStyle();
  const { getSeconds } = usePointerClockSeconds();
  return <SecondsSC second={getSeconds} />;
};

export default React.memo(PointerClockSeconds);
