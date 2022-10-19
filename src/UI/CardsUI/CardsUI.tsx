import React from "react";
import { useCardsUIStyled } from "./style";
import { ICardsUIProps } from "./types";

const CardsUI = ({ variant, title, children }: ICardsUIProps) => {
  const { CardsUIContainerSC, CardsShadowSC, CardTitleSC, CardIconSC } =
    useCardsUIStyled();

  return (
    <CardsUIContainerSC variant={variant}>
      <CardsShadowSC variant={variant}>
        <CardTitleSC variant={variant}>{title}</CardTitleSC>
        <CardIconSC>{children}</CardIconSC>
      </CardsShadowSC>
    </CardsUIContainerSC>
  );
};

export default React.memo(CardsUI);
