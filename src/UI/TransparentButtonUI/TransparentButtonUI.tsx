import React from "react";
import { useTButtonUIStyle } from "./style";
import { ITransparentButtonUIProps } from "./types";

const TransparentButtonUI = ({
  children,
  onClick,
}: ITransparentButtonUIProps) => {
  const { ButtonSC } = useTButtonUIStyle();

  return <ButtonSC onClick={onClick}>{children}</ButtonSC>;
};

export default TransparentButtonUI;
