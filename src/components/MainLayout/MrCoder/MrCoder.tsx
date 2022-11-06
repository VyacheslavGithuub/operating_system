import React, { useEffect, useState } from "react";
import IconMrPanda from "../../Icon/IconMrCoder/IconMrPanda";
import IconMrSeal from "../../Icon/IconMrCoder/IconMrSeal";
import IconMrSnake from "../../Icon/IconMrCoder/IconMrSnake";
import MrCoderUI from "./MrCoderUI/MrCoderUI";
import { useMrCoderStyled } from "./style";
import { useMrCoder } from "./useMrCoder";

const MrCoder = () => {
  const { MrCoderSC } = useMrCoderStyled();
  const { MrState } = useMrCoder();

  return (
    <MrCoderSC>
      {MrState === "panda" && (
        <MrCoderUI title="Mr Кодер работает" type="panda">
          <IconMrPanda />
        </MrCoderUI>
      )}
      {MrState === "seal" && (
        <MrCoderUI title="Mr Кодер отдыхает" type="seal">
          <IconMrSeal />
        </MrCoderUI>
      )}

      {MrState === "snake" && (
        <MrCoderUI title="Mr Кодер спит" type="snake">
          <IconMrSnake />
        </MrCoderUI>
      )}
    </MrCoderSC>
  );
};

export default MrCoder;
