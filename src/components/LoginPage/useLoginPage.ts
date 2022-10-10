import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { putVisible_pinCode } from "../../store/reducers/InputSlice/InputSlice";

export const useLoginPage = () => {
  const dispatch = useAppDispatch();
  const { isAuth, isVisible_pinCode, isBlur } = useAppSelector(
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
  // Нажимаем на фон для закрытия формы
  const handleResetPinCode = () => {
    dispatch(putVisible_pinCode(false));
    setSwipeDistance(0);
  };

  return {
    isAuth,
    handlers,
    SwipeDistance,
    isVisible_pinCode,
    handleResetPinCode,
  };
};
