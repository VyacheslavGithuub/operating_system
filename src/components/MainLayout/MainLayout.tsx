import React from "react";
import Applications from "./Applications/Applications";
import BackgroundTheme from "./BackgroundTheme/BackgroundTheme";
import BlockAplications from "./BlockAplications/BlockAplications";
import ButtonExit from "./ButtonExit/ButtonExit";
import { useMainLayoutStyle } from "./style";
import Weather from "./Applications/Weather/Weather";

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
      {/* <Weather /> */}
      <BlockAplications />
      <BackgroundTheme
        BackgroundThemeObj={BackgroundThemeObj}
        HLocalStorage={HLocalStorage}
      />

      <Applications />
    </MainLayoutSC>
  );
};

export default React.memo(MainLayout);
