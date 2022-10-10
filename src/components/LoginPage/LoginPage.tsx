import React from "react";
import TimeUI from "../../UI/TimeUI/TimeUI";
import { useLoginPageStyle } from "./style";
import LoginPageForm from "./LoginPageForm/LoginPageForm";
import { useAppDispatch } from "../../store/hooks/redux";

import { ILoginPageProps } from "./types";
import TButtonAnimationUI from "../../UI/TransparentButtonUI/TButtonAnimationUI/TButtonAnimationUI";
import AnimatedUpArrowsUI from "../../UI/AnimatedUpArrowsUI/AnimatedUpArrowsUI";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { putVisible_pinCode } from "../../store/reducers/InputSlice/InputSlice";
import { useLoginPage } from "./useLoginPage";

const LoginPage = () => {
  // стили
  const {
    TimeSC,
    CancelSC,
    EnterPinSC,
    LoginPageSC,
    LoginPageFormSC,
    LoginPageFormWrapSC,
    AnimatedUpArrowsUISC,
    LoginPageCenterBlock,
  } = useLoginPageStyle();
  // ???
  const {
    handlers,
    SwipeDistance,
    isVisible_pinCode,
    isAuth,
    handleResetPinCode,
  } = useLoginPage();

  // useApp
  const dispatch = useAppDispatch();
  const { isMobile }: any = useMatchMedia();

  //handle для показа формы
  const handleSubmit = () => {
    dispatch(putVisible_pinCode(!isVisible_pinCode));
  };
  console.log(isVisible_pinCode);

  return (
    <LoginPageSC
      {...handlers}
      SwipeDistance={SwipeDistance}
      onClick={handleResetPinCode}
    >
      {/* Форма Входа */}
      {isVisible_pinCode && (
        <LoginPageCenterBlock>
          <LoginPageFormWrapSC
            isAuth={!isAuth}
            onClick={(event: any) => event.stopPropagation()}
          >
            <LoginPageFormSC isVisible={isVisible_pinCode}>
              <LoginPageForm isFocus={isVisible_pinCode} />
              <EnterPinSC>Enter PIN (1234) </EnterPinSC>
              <CancelSC onClick={handleSubmit}>Cancel</CancelSC>
            </LoginPageFormSC>
          </LoginPageFormWrapSC>
        </LoginPageCenterBlock>
      )}

      {/* На разных дивайсах разные кнопки */}
      {isMobile ? (
        <AnimatedUpArrowsUISC SwipeDistance={SwipeDistance}>
          <AnimatedUpArrowsUI />
        </AnimatedUpArrowsUISC>
      ) : (
        <TButtonAnimationUI
          isVisible={isVisible_pinCode}
          onClick={() => handleSubmit()}
        >
          <div>{"=>"}</div>
        </TButtonAnimationUI>
      )}
      {/* Время */}
      <TimeSC isVisible={isVisible_pinCode} SwipeDistance={SwipeDistance}>
        <TimeUI isVisible={isVisible_pinCode} />
      </TimeSC>
    </LoginPageSC>
  );
};

export default React.memo(LoginPage);
