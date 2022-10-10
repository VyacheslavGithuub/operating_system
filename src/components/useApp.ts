import { useAppSelector } from "../store/hooks/redux";

export const useApp = () => {
  const { isAuth, isVisible_pinCode } = useAppSelector(
    (state) => state.InputSlice
  );

  return {
    isAuth,
    isVisible_pinCode,
  };
};
