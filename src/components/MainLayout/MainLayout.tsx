import React from "react";
import Applications from "./Applications/Applications";
import BackgroundTheme from "./BackgroundTheme/BackgroundTheme";
import DisplayAplications from "./DisplayAplications/DisplayAplications";
import MrCoder from "./MrCoder/MrCoder";
import { useMainLayoutStyle } from "./style";
import { IMainLayoutProps } from "./type";

const MainLayout = ({
  BackgroundThemeObj,
  HLocalStorage,
}: IMainLayoutProps) => {
  const { MainLayoutSC } = useMainLayoutStyle();

  return (
    <>
      <MrCoder />
      <MainLayoutSC>
        <DisplayAplications />
        <BackgroundTheme
          BackgroundThemeObj={BackgroundThemeObj}
          HLocalStorage={HLocalStorage}
        />
        <Applications />
      </MainLayoutSC>
    </>
  );
};

export default React.memo(MainLayout);
