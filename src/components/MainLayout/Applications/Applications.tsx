import React from "react";
import CardsUI from "../../../UI/CardsUI/CardsUI";
import IconAndTitle from "../../../UI/IconAndTitle/IconAndTitle";
import IconBriefcase from "../../Icon/IconBriefcase";
import IconCalculator from "../../Icon/IconCalculator";
import IconNotebook from "../../Icon/IconNotebook";
import IconWeather from "../../Icon/IconWeather";
import IconWotch from "../../Icon/IconWotch";
import { useApplicationsStyle } from "./style";

const Applications = () => {
  const { AContainerSC, AContentSC } = useApplicationsStyle();

  return (
    <AContainerSC>
      <IconAndTitle title="Applications">
        <IconBriefcase />
      </IconAndTitle>
      <AContentSC>
        <CardsUI variant="small" title="Watch">
          <IconWotch />
        </CardsUI>
        <CardsUI variant="small" title="Notebook">
          <IconNotebook />
        </CardsUI>
        <CardsUI variant="small" title="Weather">
          <IconWeather />
        </CardsUI>
        <CardsUI variant="small" title="Calculator">
          <IconCalculator />
        </CardsUI>
      </AContentSC>
    </AContainerSC>
  );
};

export default React.memo(Applications);
