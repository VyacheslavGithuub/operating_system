import { Routes, Route } from "react-router-dom";
import Calculator from "../Applications/Calculator/Calculator";
import Dino from "../Applications/Dino/Dino";
import Notes from "../Applications/Notes/Notes";
import Snake from "../Applications/Snake/Snake";
import Tetris from "../Applications/Tetris/Tetris";
import Weather from "../Applications/Weather/Weather";
import Wotch from "../Applications/Wotch/Wotch";
import { useBlockAplicationsStyle } from "./style";

type Props = {};

const BlockAplications = (props: Props) => {
  const { BlockAplicationsSC } = useBlockAplicationsStyle();

  return (
    <BlockAplicationsSC>
      <Routes>
        <Route path="operating_system" element={<Notes />} />
        <Route path="operating_system/weather" element={<Weather />} />
        <Route path="operating_system/wotch" element={<Wotch />} />
        <Route path="operating_system/calculator" element={<Calculator />} />
        <Route path="operating_system/dino" element={<Dino />} />
        <Route path="operating_system/snake" element={<Snake />} />
        <Route path="operating_system/tetris" element={<Tetris />} />
      </Routes>
    </BlockAplicationsSC>
  );
};

export default BlockAplications;
