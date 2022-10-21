import React from "react";
import { ThemeProvider } from "styled-components";
import { blue_theme, dark_theme, light_theme } from "../theme/theme";
import LoginPage from "./LoginPage/LoginPage";
import MainLayout from "./MainLayout/MainLayout";
import { useAppStyle } from "./style";
import { useApp } from "./useApp";

const App: React.FC = () => {
  const { AppSC } = useAppStyle();
  const {
    isAuth,
    BgObj,
    backgroundT,
    HLocalStorage,
    isVisible_pinCode,
    windowInnerHeight,
    BackgroundThemeObj,
  } = useApp();

  return (
    <ThemeProvider
      theme={
        backgroundT === 1
          ? blue_theme
          : backgroundT === 2
          ? dark_theme
          : light_theme
      }
    >
      <AppSC
        isAuth={isAuth}
        isVisible={isVisible_pinCode}
        windowInnerHeight={windowInnerHeight}
        lg={BgObj.lg}
        md={BgObj.md}
        sm={BgObj.sm}
      >
        {/* <MainLayout
          BackgroundThemeObj={BackgroundThemeObj}
          HLocalStorage={HLocalStorage}
        /> */}
        {isAuth ? (
          <MainLayout
            BackgroundThemeObj={BackgroundThemeObj}
            HLocalStorage={HLocalStorage}
          />
        ) : (
          <LoginPage />
        )}
      </AppSC>
    </ThemeProvider>
  );
};

export { App };
