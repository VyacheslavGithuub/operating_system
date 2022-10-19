import React from "react";
import TransparentButtonUI from "../TransparentButtonUI";
import { useTButtonAnimationStyle } from "./style";
import { ITButtonAnimationUIProps } from "./types";

const TButtonAnimationUI = ({
  size,
  children,
  onClick,
  isVisible,
}: ITButtonAnimationUIProps) => {
  const { ButtonAnimationSC } = useTButtonAnimationStyle();
  return (
    <ButtonAnimationSC onClick={onClick} isVisible={isVisible}>
      <TransparentButtonUI size={size}>{children}</TransparentButtonUI>
    </ButtonAnimationSC>
  );
};

export default React.memo(TButtonAnimationUI);
