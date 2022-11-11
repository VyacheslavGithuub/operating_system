import React from "react";
import { useCardsUIStyled } from "./style";
import { ICardsUIProps } from "./types";
import { Link } from "react-router-dom";

const CardsUI = ({ title, children, url }: ICardsUIProps) => {
  const { CardsUIContainerSC, CardsShadowSC, CardTitleSC, CardIconSC } =
    useCardsUIStyled();

  return (
    <CardsUIContainerSC>
      <Link to={url}>
        <CardsShadowSC>
          <CardTitleSC>{title}</CardTitleSC>
          <CardIconSC>{children}</CardIconSC>
        </CardsShadowSC>
      </Link>
    </CardsUIContainerSC>
  );
};

export default React.memo(CardsUI);
