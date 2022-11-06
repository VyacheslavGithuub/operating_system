import React from "react";
import TransparentButtonUI from "../../../../UI/TransparentButtonUI/TransparentButtonUI";
import { WotchContainer } from "./style";
import WotchContent from "./WotchContent/WotchContent";

const Wotch = () => {
  const { WotchContainerSC } = WotchContainer();

  return (
    <WotchContainerSC>
      <WotchContent />
    </WotchContainerSC>
  );
};

export default React.memo(Wotch);
