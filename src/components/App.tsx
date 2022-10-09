import React, { TouchEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/redux";
import {
  putInput,
  setCloseBlur,
} from "../store/reducers/InputSlice/InputSlice";
import LoginPage from "./LoginPage/LoginPage";
import MainLayout from "./MainLayout/MainLayout";
import { useAppStyle } from "./style";

const App: React.FC = () => {
  // Стили
  const { AppSC, AppBlurSC } = useAppStyle();
  // use
  const dispatch = useAppDispatch();
  const { isVisible_pinCode, closeBlur, isAuth } = useAppSelector(
    (state) => state.InputSlice
  );
  const [SwapPosition, setSwapPosition] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [difference, setDifference] = useState<number>(0);
  const [numberYPosition, setNumberYPosition] = useState<number>(0);
  const [numberYOpacity, setNumberYOpacity] = useState<number>(0);

  // Для эмитирования отправки данных на сервер
  useEffect(() => {
    if (isAuth) {
      dispatch(setCloseBlur(true));
      dispatch(putInput(false));
    }
  }, [dispatch, isAuth]);

  const handleTouchMove = (e: any) => {
    setSwapPosition(e.targetTouches[0].clientY);
  };

  function handleTouchStart(e: any) {
    setTouchStart(e.targetTouches[0].clientY);
  }

  function handleTouchEnd(e: any) {
    setTouchEnd(e.changedTouches[0].clientY);
  }
  console.log(numberYOpacity);

  const handleClick = () => {
    dispatch(putInput(false));
    setTouchEnd(0);
    setNumberYPosition(0);
    setNumberYOpacity(0);
  };

  let defaultMeaning = SwapPosition - touchStart;

  useEffect(() => {
    if ((defaultMeaning / 70) * -1 > 0) {
      setDifference((defaultMeaning / 70) * -1);
    }
    if ((defaultMeaning / 10) * -1 > 0) {
      setNumberYPosition(((SwapPosition - touchStart) / 10) * -1);
    }
    if ((defaultMeaning / 200) * -1 > 0) {
      setNumberYOpacity(((SwapPosition - touchStart) / 200) * -1);
    }

    if (difference > 1 && touchEnd > 1) {
      dispatch(putInput(true));
      setNumberYPosition(20);
      setNumberYOpacity(1);
    }
    if (difference < 1 && touchEnd < 1) {
      setTouchEnd(0);
      setNumberYPosition(0);
      setNumberYOpacity(0);
      setTouchStart(0);
    }
    if (isAuth) {
      setTouchEnd(0);
      setNumberYPosition(0);
      setNumberYOpacity(0);
      setTouchStart(0);
    }
  }, [
    SwapPosition,
    touchEnd,
    isAuth,
    defaultMeaning,
    difference,
    touchStart,
    dispatch,
  ]);
  return (
    <AppSC isVisible={isVisible_pinCode}>
      {/* <AppBlurSC
        isVisible={isVisible_pinCode}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
      > */}
      {isVisible_pinCode ? (
        <AppBlurSC isVisible={numberYOpacity} onClick={() => handleClick()}>
          {!isAuth && (
            <LoginPage
              isAuth={isAuth}
              numberYPosition={numberYPosition}
              numberYOpacity={numberYOpacity}
            />
          )}
          {isAuth && closeBlur && <MainLayout />}
        </AppBlurSC>
      ) : (
        <AppBlurSC
          isVisible={numberYOpacity}
          onTouchStart={(e) => handleTouchStart(e)}
          onTouchMove={(e) => handleTouchMove(e)}
          onTouchEnd={(e) => handleTouchEnd(e)}
        >
          {!isAuth && (
            <LoginPage
              isAuth={isAuth}
              numberYPosition={numberYPosition}
              numberYOpacity={numberYOpacity}
            />
          )}
          {isAuth && closeBlur && <MainLayout />}
        </AppBlurSC>
      )}
    </AppSC>
  );
};

export { App };
