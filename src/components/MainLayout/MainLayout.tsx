import React from "react";
import { useAppDispatch } from "../../store/hooks/redux";
import { putIsAuth } from "../../store/reducers/InputSlice/InputSlice";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleCloses = () => dispatch(putIsAuth(false));
  return (
    <div>
      MainLayout
      <button onClick={() => handleCloses()}>Вернуться</button>
    </div>
  );
};

export default MainLayout;
