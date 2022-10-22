import React from "react";
import { Routes, Route } from "react-router-dom";
import Calculator from "../Applications/Calculator/Calculator";
import Notes from "../Applications/Notes/Notes";
import Wotch from "../Applications/Wotch/Wotch";
import { useBlockAplicationsStyle } from "./style";

type Props = {};

const BlockAplications = (props: Props) => {
  const { BlockAplicationsSC } = useBlockAplicationsStyle();

  return (
    <BlockAplicationsSC>
      <Routes>
        <Route path="operating_system/" element={<Notes />} />
        <Route path="operating_system/wotch" element={<Wotch />} />
        <Route path="operating_system/notebook" element={<Notes />} />
        <Route path="operating_system/calculator" element={<Calculator />} />
      </Routes>
    </BlockAplicationsSC>
  );
};

export default BlockAplications;
