import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { putVisible_pinCode } from "../../store/reducers/InputSlice/InputSlice";

export const useLoginPage = () => {
  const dispatch = useAppDispatch();
  const { isMobile }: any = useMatchMedia();
  const { isAuth, isVisible_pinCode } = useAppSelector(
    (state) => state.InputSlice
  );
  const [SwipeDistance, setSwipeDistance] = useState<number>(0);

  // Логика для свайпа
  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      if (eventData.dir === "Up") {
        if (eventData.absY > 10) {
          setSwipeDistance(eventData.absY);
        }
      }
    },
    onSwiped: (eventData) => {
      if (eventData.absY < 200) {
        setSwipeDistance(0);
      } else {
        setSwipeDistance(347);
        dispatch(putVisible_pinCode(true));
      }
    },
  });
  const swipeProps = isMobile ? handlers : null;
  // Нажимаем на фон для закрытия формы
  const handleResetPinCodeMobile = () => {
    if (isMobile) {
      dispatch(putVisible_pinCode(false));
      setSwipeDistance(0);
    }
  };
  const handleResetPinCode = () => {
    dispatch(putVisible_pinCode(false));
  };

  //handle для показа формы
  const handleSetPinCode = () => {
    dispatch(putVisible_pinCode(true));
  };
  // Открываем поле с паролем нажимая на Enter
  const handleKeyLogin = (e: any) => {
    if (e.keyCode === 13) handleSetPinCode();
    if (e.keyCode === 27) handleResetPinCode();
  };

  return {
    isAuth,
    isMobile,
    swipeProps,
    SwipeDistance,
    handleKeyLogin,
    handleSetPinCode,
    isVisible_pinCode,
    handleResetPinCode,
    handleResetPinCodeMobile,
  };
};
