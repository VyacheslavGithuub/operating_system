import React from "react";
import Applications from "./Applications/Applications";
import BackgroundTheme from "./BackgroundTheme/BackgroundTheme";
import { useMainLayoutStyle } from "./style";
import Weather from "./Weather/Weather";

interface IMainLayoutProps {
  BackgroundThemeObj: any;
  HLocalStorage: (arg0: number) => void;
}

const MainLayout = ({
  BackgroundThemeObj,
  HLocalStorage,
}: IMainLayoutProps) => {
  const { MainLayoutSC } = useMainLayoutStyle();

  return (
    <MainLayoutSC>
      <Weather />
      <BackgroundTheme
        BackgroundThemeObj={BackgroundThemeObj}
        HLocalStorage={HLocalStorage}
      />
      <Applications />
    </MainLayoutSC>
  );
};

export default React.memo(MainLayout);
