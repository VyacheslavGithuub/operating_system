import React from "react";
import TransparentButtonUI from "../../../../../UI/TransparentButtonUI/TransparentButtonUI";
import PointerClock from "./PointerClock/PointerClock";
import { useWotchContentStyle } from "./style";

const WotchContent = () => {
  const { WotchContentSC } = useWotchContentStyle();

  return (
    <WotchContentSC>
      <PointerClock />
    </WotchContentSC>
  );
};

export default WotchContent;
