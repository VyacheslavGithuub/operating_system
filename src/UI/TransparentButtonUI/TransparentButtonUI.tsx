import React from "react";
import { useTButtonUIStyle } from "./style";
import { ITransparentButtonUIProps } from "./types";

const TransparentButtonUI = ({
  children,
  onClick,
  size,
}: ITransparentButtonUIProps) => {
  const { ButtonSC } = useTButtonUIStyle();

  return (
    <ButtonSC onClick={onClick} size={size}>
      {children}
    </ButtonSC>
  );
};

export default TransparentButtonUI;
