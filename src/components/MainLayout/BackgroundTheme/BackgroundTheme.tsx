import React from "react";
import TransparentButtonUI from "../../../UI/TransparentButtonUI/TransparentButtonUI";
import { useBackgroundThemeStyle } from "./style";
import { IBackgroundTheme } from "./types";
interface IBackgroundThemeProps {
  BackgroundThemeObj: any;
  HLocalStorage: (arg0: number) => void;
}
const BackgroundTheme = ({
  BackgroundThemeObj,
  HLocalStorage,
}: IBackgroundThemeProps) => {
  const { BgThemeSC, BgThemeButtonSC, BgThemeTitleSC } =
    useBackgroundThemeStyle();

  return (
    <BgThemeSC>
      {BackgroundThemeObj.map((item: IBackgroundTheme) => (
        <BgThemeButtonSC key={item.id}>
          <TransparentButtonUI onClick={() => HLocalStorage(item.id)}>
            <BgThemeTitleSC>{item.name}</BgThemeTitleSC>
          </TransparentButtonUI>
        </BgThemeButtonSC>
      ))}
    </BgThemeSC>
  );
};

export default React.memo(BackgroundTheme);
