import React from 'react'
import { useAppSelector } from "../store/hooks/redux";
import LoginPage from "./LoginPage/LoginPage";
import MainLayout from "./MainLayout/MainLayout";
import { useAppStyle } from "./style";

const App: React.FC = () => {
  const { AppSC } = useAppStyle();
  const { isAuth } = useAppSelector((state) => state.InputSlice);
  console.log(isAuth);

  return <AppSC>{!isAuth ? <LoginPage /> : <MainLayout />}</AppSC>;
};

export {App} 