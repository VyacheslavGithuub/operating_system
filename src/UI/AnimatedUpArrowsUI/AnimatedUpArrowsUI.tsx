import React from "react";
import { useAnimatedUpArrowsStyle } from "./style";

const AnimatedUpArrowsUI = () => {
  const { UpArrowsSC, UpArrowsAnimationSC, UpArrowsAnimationTwoSC } =
    useAnimatedUpArrowsStyle();

  return (
    <>
      <UpArrowsAnimationSC>
        <UpArrowsSC />
      </UpArrowsAnimationSC>
      <UpArrowsAnimationTwoSC>
        <UpArrowsSC />
      </UpArrowsAnimationTwoSC>
    </>
  );
  
};

export default AnimatedUpArrowsUI;
