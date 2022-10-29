import React from "react";
import CardsUI from "../../../UI/CardsUI/CardsUI";
import IconAndTitle from "../../../UI/IconAndTitle/IconAndTitle";
import IconBriefcase from "../../Icon/IconBriefcase";
import IconCalculator from "../../Icon/IconCalculator";
import IconNotebook from "../../Icon/IconNotebook";
import IconWeather from "../../Icon/IconWeather";
import IconWotch from "../../Icon/IconWotch";
import { useApplicationsStyle } from "./style";
// operating_system
const Applications = () => {
  const { AContainerSC, AContentSC } = useApplicationsStyle();

  return (
    <AContainerSC>
      <IconAndTitle title="Applications">
        <IconBriefcase />
      </IconAndTitle>
      {/* Card */}

      <AContentSC>
        <CardsUI variant="small" title="Notebook" url="operating_system/">
          <IconNotebook />
        </CardsUI>
        <CardsUI variant="small" title="Weather" url="operating_system/weather">
          <IconWeather />
        </CardsUI>

        <CardsUI variant="small" title="Watch" url="operating_system/wotch">
          <IconWotch />
        </CardsUI>

        <CardsUI
          variant="small"
          title="Calculator"
          url="operating_system/calculator"
        >
          <IconCalculator />
        </CardsUI>
      </AContentSC>
    </AContainerSC>
  );
};

export default React.memo(Applications);
