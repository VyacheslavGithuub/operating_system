import React from "react";
import { useAppDispatch } from "../../store/hooks/redux";
import {
  putInput,
  putIsAuth,
  setCloseBlur,
} from "../../store/reducers/InputSlice/InputSlice";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleCloses = () => {
    dispatch(putIsAuth(false));
    dispatch(setCloseBlur(false));
    dispatch(putInput(false));
  };
  return (
    <div>
      Обрати внимание на анимации
      <button onClick={() => handleCloses()}>Вернуться</button>
    </div>
  );
};

export default MainLayout;
