import React from "react";
import TimeUI from "../../UI/TimeUI/TimeUI";
import { useLoginPageStyle } from "./style";
import { useLoginPage } from "./useLoginPage";
import LoginPageForm from "./LoginPageForm/LoginPageForm";
import AnimatedUpArrowsUI from "../../UI/AnimatedUpArrowsUI/AnimatedUpArrowsUI";
import TButtonAnimationUI from "../../UI/TransparentButtonUI/TButtonAnimationUI/TButtonAnimationUI";
import IconRightArrow from "../Icon/IconRightArrow";

function LoginPage() {
  // стили
  const {
    TimeSC,
    CancelSC,
    EnterPinSC,
    LoginPageSC,
    LoginPageFormSC,
    IconRightArrowSC,
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
    handleKeyLogin,
    handleSetPinCode,
    isVisible_pinCode,
    handleResetPinCode,
    handleResetPinCodeMobile,
  } = useLoginPage();

  return (
    <LoginPageSC
      {...swipeProps}
      SwipeDistance={SwipeDistance}
      onClick={handleResetPinCodeMobile}
      isBlur={isVisible_pinCode}
      onKeyDown={handleKeyLogin}
      tabIndex={0}
    >
      {/* Форма Входа */}
      {isVisible_pinCode && (
        <LoginPageCenterBlock>
          <LoginPageFormWrapSC
            isAuth={!isAuth}
            onClick={(event: any) => event.stopPropagation()}
          >
            <LoginPageFormSC isVisible={isVisible_pinCode}>
              <LoginPageForm />
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
          size="small"
        >
          <IconRightArrowSC>
            <IconRightArrow />
          </IconRightArrowSC>
        </TButtonAnimationUI>
      )}
      {/* Время */}
      <TimeSC isVisible={isVisible_pinCode} SwipeDistance={SwipeDistance}>
        <TimeUI />
      </TimeSC>
    </LoginPageSC>
  );
}

export default React.memo(LoginPage);
