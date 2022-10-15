import React from "react";
import { useAppDispatch } from "../../store/hooks/redux";
import {
  putVisible_pinCode,
  putAuth,
  putBlur,
} from "../../store/reducers/InputSlice/InputSlice";
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

  const dispatch = useAppDispatch();
  const handleCloses = () => {
    dispatch(putAuth(false));
    dispatch(putBlur(false));
    dispatch(putVisible_pinCode(false));
  };
  return (
    <MainLayoutSC>
      Обрати внимание на анимации
      <button onClick={() => handleCloses()}>Вернуться</button>
      <Weather />
      <BackgroundTheme
        BackgroundThemeObj={BackgroundThemeObj}
        HLocalStorage={HLocalStorage}
      />
    </MainLayoutSC>
  );
};

export default React.memo(MainLayout);
