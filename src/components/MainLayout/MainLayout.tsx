import React from "react";
import { useAppDispatch } from "../../store/hooks/redux";
import {
  putVisible_pinCode,
  putAuth,
  putBlur,
} from "../../store/reducers/InputSlice/InputSlice";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleCloses = () => {
    dispatch(putAuth(false));
    dispatch(putBlur(false));
    dispatch(putVisible_pinCode(false));
  };
  return (
    <div>
      Обрати внимание на анимации
      <button onClick={() => handleCloses()}>Вернуться</button>
    </div>
  );
};

export default MainLayout;
