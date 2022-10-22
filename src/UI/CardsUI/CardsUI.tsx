import React, { useState } from "react";
import Spiner from "../Spiner/Spiner";
import { useCardsUIStyled } from "./style";
import { ICardsUIProps } from "./types";
import { Link } from "react-router-dom";

const CardsUI = ({ variant, title, children, url }: ICardsUIProps) => {
  const { CardsUIContainerSC, CardsShadowSC, CardTitleSC, CardIconSC } =
    useCardsUIStyled();

  return (
    <CardsUIContainerSC variant={variant}>
      <Link to={url}>
        <CardsShadowSC variant={variant}>
          <CardTitleSC variant={variant}>{title}</CardTitleSC>
          <CardIconSC>{children}</CardIconSC>
        </CardsShadowSC>
      </Link>
    </CardsUIContainerSC>
  );
};

export default React.memo(CardsUI);
