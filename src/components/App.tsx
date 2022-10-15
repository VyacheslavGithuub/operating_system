import React from "react";
import LoginPage from "./LoginPage/LoginPage";
import MainLayout from "./MainLayout/MainLayout";
import { useAppStyle } from "./style";
import { useApp } from "./useApp";


const App: React.FC = () => {
  const { AppSC } = useAppStyle();
  const {
    isAuth,
    BgObj,
    HLocalStorage,
    isVisible_pinCode,
    windowInnerHeight,
    BackgroundThemeObj,
  } = useApp();

  return (
    <AppSC
      isAuth={isAuth}
      isVisible={isVisible_pinCode}
      windowInnerHeight={windowInnerHeight}
      lg={BgObj.lg}
      md={BgObj.md}
      sm={BgObj.sm}
    >
      {/* <MainLayout /> */}
      {isAuth ? (
        <MainLayout
          BackgroundThemeObj={BackgroundThemeObj}
          HLocalStorage={HLocalStorage}
        />
      ) : (
        <LoginPage />
      )}
    </AppSC>
  );
};

export { App };
