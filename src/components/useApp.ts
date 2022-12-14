import { useLayoutEffect, useState } from "react";
import { useAppSelector } from "../store/hooks/redux";
import BackgroundThemeObj from "./BackgroundThemeObj.json";

export const useApp = () => {
  const { isAuth, isVisible_pinCode } = useAppSelector(
    (state) => state.InputSlice
  );
  // Стейт для манипуляций с фоном
  const [backgroundT, setBackgroundT] = useState<number>(1);
  // const [theme, setTheme] = useState("blue");
  // const switchTheme = () => {
  //   theme === "blue" ? setTheme("dark") : setTheme("blue");
  // };

  const [windowInnerHeight, setWindowInnerHeight] = useState<number>(0);

  // Пушим в state и LSror id объекта
  const HLocalStorage = (id: number) => {
    localStorage.setItem("background", `${id}`);
    setBackgroundT(id);
  };

  useLayoutEffect(() => {
    setWindowInnerHeight(window.innerHeight);
  }, []);

  // Масив с текущими параметрами background
  let BgArray = BackgroundThemeObj.filter((v) => v.id === backgroundT);
  // объект с текущими параметрами background
  let BgObj = BgArray[0];

  let getLocalStoreg = Number(localStorage.getItem("background"));
  useLayoutEffect(() => {
    if (localStorage.getItem("background") === null) {
      localStorage.setItem("background", "1");
    } else {
      // до загрузки компонента сетаем значчение из localStoreg
      setBackgroundT(getLocalStoreg);
    }
  }, [getLocalStoreg]);

  return {
    BgObj,
    isAuth,
    backgroundT,
    HLocalStorage,
    isVisible_pinCode,
    windowInnerHeight,
    BackgroundThemeObj,
  };
};
