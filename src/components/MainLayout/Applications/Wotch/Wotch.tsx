import React from "react";
import { WotchContainer } from "./style";
import WotchContent from "./WotchContent/WotchContent";
import WotchHeader from "./WotchHeader/WotchHeader";

const Wotch = () => {
  const { WotchContainerSC } = WotchContainer();

  return (
    <WotchContainerSC>
      {/* <WotchHeader /> */}
      <WotchContent />
    </WotchContainerSC>
  );
};

export default React.memo(Wotch);
