import React, { useState } from "react";
import CardsUI from "../../../UI/CardsUI/CardsUI";
import IconAndTitle from "../../../UI/IconAndTitle/IconAndTitle";
import IconBriefcase from "../../Icon/IconBriefcase";

import IconNotebook from "../../Icon/IconAplication/IconNotebook";
import IconWeather from "../../Icon/IconAplication/IconWeather";
import IconWotch from "../../Icon/IconAplication/IconWotch";
import IconDinosaur from "../../Icon/IconAplication/IconDinosaur";
import { useApplicationsStyle } from "./style";
import IconSnake from "../../Icon/IconAplication/IconSnake";
import IconTetris from "../../Icon/IconAplication/IconTetris";
import IconTegs from "../../Icon/IconAplication/IconTegs";
import IconNews from "../../Icon/IconAplication/IconNews";
import IconCalculator from "../../Icon/IconAplication/IconCalculator";
import IconSword from "../../Icon/IconAplication/IconSword";

// operating_system
const Applications = () => {
  const { AContainerSC, AContentSC, AArowRightSC, AArowLeftSC, ATestSC } =
    useApplicationsStyle();
  const [swipe, setSwipe] = useState<number>(0);
  const handleSwipeLeft = (e: any) => {
    e.stopPropagation();
    setSwipe(swipe + 365);
  };
  const handleSwipeRight = (e: any) => {
    e.stopPropagation();
    setSwipe(swipe - 365);
  };
  return (
    <AContainerSC>
      <IconAndTitle title="Applications">
        <IconBriefcase />
      </IconAndTitle>

      {/* Card */}

      <ATestSC>
        <AArowLeftSC onClick={(e) => handleSwipeLeft(e)} />
        <AArowRightSC onClick={(e) => handleSwipeRight(e)} />
        <AContentSC swipe={swipe}>
          <CardsUI title="Notebook" url="operating_system/">
            <IconNotebook />
          </CardsUI>
          {/* <CardsUI title="Weather" url="operating_system/weather">
            <IconWeather />
          </CardsUI> */}

          <CardsUI title="Watch" url="operating_system/wotch">
            <IconWotch />
          </CardsUI>

          <CardsUI title="Calculator" url="operating_system/calculator">
            <IconCalculator />
          </CardsUI>

          <CardsUI title="Dino" url="operating_system/dino">
            <IconDinosaur />
          </CardsUI>

          <CardsUI title="Snake" url="operating_system/snake">
            <IconSnake />
          </CardsUI>

          <CardsUI title="Tetris" url="operating_system/tetris">
            <IconTetris />
          </CardsUI>

          <CardsUI
            title="guess the picture"
            url="operating_system/remembering_images"
          >
            <IconSword />
          </CardsUI>
          <CardsUI title="Tags" url="operating_system/remembering_images">
            <IconTegs />
          </CardsUI>
          <CardsUI title="News" url="operating_system/remembering_images">
            <IconNews />
          </CardsUI>
        </AContentSC>
      </ATestSC>
    </AContainerSC>
  );
};

export default React.memo(Applications);
