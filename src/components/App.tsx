import React from "react";
import LoginPage from "./LoginPage/LoginPage";
import MainLayout from "./MainLayout/MainLayout";
import { useAppStyle } from "./style";
import { useApp } from "./useApp";

const App: React.FC = () => {
  const { AppSC } = useAppStyle();
  const { isAuth, isVisible_pinCode, windowInnerHeight } = useApp();
  return (
    <AppSC isVisible={isVisible_pinCode} windowInnerHeight={windowInnerHeight}>
      {isAuth ? <MainLayout /> : <LoginPage />}
    </AppSC>
  );
};

export { App };
