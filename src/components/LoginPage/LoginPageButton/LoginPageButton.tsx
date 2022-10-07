import React from "react";
import { useButtonSCStyle } from "./style";

interface ILoginPageButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isVisible: boolean;
}

const LoginPageButton = ({
  children,
  onClick,
  isVisible,
}: ILoginPageButtonProps) => {
  const { ButtonSC } = useButtonSCStyle();
  return (
    <ButtonSC onClick={onClick} isVisible={isVisible}>
      {children}
    </ButtonSC>
  );
};

export default React.memo(LoginPageButton);
