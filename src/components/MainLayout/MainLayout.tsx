import React from "react";
import Applications from "./Applications/Applications";
import BackgroundTheme from "./BackgroundTheme/BackgroundTheme";
import BlockAplications from "./BlockAplications/BlockAplications";
import { useMainLayoutStyle } from "./style";
import { IMainLayoutProps } from "./type";

const MainLayout = ({
  BackgroundThemeObj,
  HLocalStorage,
}: IMainLayoutProps) => {
  const { MainLayoutSC } = useMainLayoutStyle();

  return (
    <MainLayoutSC>
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
