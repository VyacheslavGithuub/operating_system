import TimeUI from "../../UI/TimeUI/TimeUI";
import { useLoginPageStyle } from "./style";
import LoginPageForm from "./LoginPageForm/LoginPageForm";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { putInput } from "../../store/reducers/InputSlice/InputSlice";
import { ILoginPageProps } from "./types";
import TButtonAnimationUI from "../../UI/TransparentButtonUI/TButtonAnimationUI/TButtonAnimationUI";
import AnimatedUpArrowsUI from "../../UI/AnimatedUpArrowsUI/AnimatedUpArrowsUI";
import { useMatchMedia } from "../../hooks/useMatchMedia";

const LoginPage = ({
  isAuth,
  numberYPosition,
  numberYOpacity,
}: ILoginPageProps) => {
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
  // useApp
  const dispatch = useAppDispatch();
  const { isVisible_pinCode } = useAppSelector((state) => state.InputSlice);
  const { isMobile }: any = useMatchMedia();

  //handle для показа формы
  const handleSubmit = () => {
    dispatch(putInput(!isVisible_pinCode));
  };

  return (
    <LoginPageSC>
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

      {isMobile ? (
        <AnimatedUpArrowsUISC
          numberYPosition={numberYPosition}
          numberYOpacity={numberYOpacity}
        >
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

      <TimeSC
        isVisible={isVisible_pinCode}
        numberYPosition={numberYPosition}
        numberYOpacity={numberYOpacity}
      >
        <TimeUI isVisible={isVisible_pinCode} />
      </TimeSC>
    </LoginPageSC>
  );
};

export default LoginPage;
