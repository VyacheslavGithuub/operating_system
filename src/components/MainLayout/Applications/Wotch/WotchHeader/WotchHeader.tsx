import React from "react";
import TransparentButtonUI from "../../../../../UI/TransparentButtonUI/TransparentButtonUI";
import { useWotchHeaderStyle } from "./style";

const WotchHeader = () => {
  const { WotchHeaderSC, WotchHeaderItemSC } = useWotchHeaderStyle();

  return (
    <WotchHeaderSC>
      <WotchHeaderItemSC>
        <TransparentButtonUI>Цифровые часы</TransparentButtonUI>
      </WotchHeaderItemSC>
      <WotchHeaderItemSC>
        <TransparentButtonUI>Цифровые часы</TransparentButtonUI>
      </WotchHeaderItemSC>
      <WotchHeaderItemSC>
        <TransparentButtonUI>Цифровые часы</TransparentButtonUI>
      </WotchHeaderItemSC>
    </WotchHeaderSC>
  );
};

export default WotchHeader;
