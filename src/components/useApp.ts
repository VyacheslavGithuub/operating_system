import { useLayoutEffect, useState } from "react";
import { useAppSelector } from "../store/hooks/redux";

export const useApp = () => {
  const { isAuth, isVisible_pinCode } = useAppSelector(
    (state) => state.InputSlice
  );
  const [windowInnerHeight, setWindowInnerHeight] = useState<number>(0);
  useLayoutEffect(() => {
    setWindowInnerHeight(window.innerHeight);
  }, []);

  return {
    isAuth,
    isVisible_pinCode,
    windowInnerHeight,
  };
};
