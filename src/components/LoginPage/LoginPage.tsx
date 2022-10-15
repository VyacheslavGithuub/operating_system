import React from "react";
import TimeUI from "../../UI/TimeUI/TimeUI";
import { useLoginPageStyle } from "./style";
import { useLoginPage } from "./useLoginPage";
import LoginPageForm from "./LoginPageForm/LoginPageForm";
import AnimatedUpArrowsUI from "../../UI/AnimatedUpArrowsUI/AnimatedUpArrowsUI";
import TButtonAnimationUI from "../../UI/TransparentButtonUI/TButtonAnimationUI/TButtonAnimationUI";

function LoginPage() {
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
  // Логика
  const {
    isAuth,
    isMobile,
    swipeProps,
    SwipeDistance,
    isVisible_pinCode,
    handleSetPinCode,
    handleResetPinCode,
    handleResetPinCodeMobile,
  } = useLoginPage();

  return (
    <LoginPageSC
      {...swipeProps}
      SwipeDistance={SwipeDistance}
      onClick={handleResetPinCodeMobile}
      isBlur={isVisible_pinCode}
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
              <CancelSC onClick={handleResetPinCode}>Cancel</CancelSC>
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
          onClick={handleSetPinCode}
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
}

export default React.memo(LoginPage);
