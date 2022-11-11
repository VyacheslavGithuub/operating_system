import React, { useEffect, useState } from "react";
import IconCactus from "../../../Icon/IconAplication/IconCactus";
import IconDino from "../../../Icon/IconAplication/IconDinosaur/IconDino";
import IconDinoCloud from "../../../Icon/IconAplication/IconDinosaur/IconDinoCloud";
import IconDinoCloudV2 from "../../../Icon/IconAplication/IconDinosaur/IconDinoCloudV2";
import IconPause from "../../../Icon/IconPause";
import { useDinoStyle } from "./style";

const Dino = () => {
  const {
    DinoWrapSC,
    DinosaurSC,
    CactusSC,
    DinoPauseSC,
    DinoClaudSC,
    TreadmillSC,
  } = useDinoStyle();
  const [stateDino, setStateDino] = useState<boolean>(false);
  const [statePlay, setStatePlay] = useState<boolean>(false);

  const handleStateDino = () => {
    if (statePlay) {
      setStateDino(true);
      setTimeout(setStateDino, 400, false);
    }
  };
  const handleStatePlay = () => {
    setStateDino(true);
    setTimeout(setStateDino, 400, false);
    setStatePlay(!statePlay);
  };

  return (
    <DinoWrapSC onClick={handleStateDino}>
      <DinoPauseSC onClick={handleStatePlay}>
        <IconPause />
      </DinoPauseSC>
      <DinoClaudSC statePlay={statePlay}>
        <IconDinoCloud />
      </DinoClaudSC>
      {/* <IconDinoCloudV2 /> */}
      <DinosaurSC stateDino={stateDino} id="dino">
        <IconDino />
      </DinosaurSC>
      <CactusSC statePlay={statePlay}>
        <IconCactus />
      </CactusSC>
      <TreadmillSC />
    </DinoWrapSC>
  );
};

export default Dino;
