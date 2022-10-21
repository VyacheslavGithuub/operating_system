import React from "react";
import { useSpinerStyle } from "./style";

const Spiner = () => {
  const { SpinerSC } = useSpinerStyle();

  return (
    <SpinerSC>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SpinerSC>
  );
};

export default Spiner;
