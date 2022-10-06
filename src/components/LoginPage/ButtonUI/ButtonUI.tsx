import React from "react";
import { useButtonSCStyle } from "./style";

interface IButtonUIProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ButtonUI = ({ children, onClick }: IButtonUIProps) => {
  const { ButtonSC } = useButtonSCStyle();
  return <ButtonSC onClick={onClick}>{children}</ButtonSC>;
};

export default React.memo(ButtonUI);
