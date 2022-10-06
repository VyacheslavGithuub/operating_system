import { useState } from "react";
import LoginPageButton from "./LoginPageButton/LoginPageButton";
import TimeUI from "../../UI/TimeUI/TimeUI";
import { useLoginPageStyle } from "./style";
import LoginPageForm from "./LoginPageForm/LoginPageForm";

const LoginPage = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const handleSubmit = () => {
    setVisible(!isVisible);
  };
  const {
    LoginPageSC,
    LoginPageBlurSC,
    LoginPageFormSC,
    EnterPinSC,
    CancelSC,
  } = useLoginPageStyle();
  return (
    <LoginPageSC isVisible={isVisible}>
      <LoginPageBlurSC isVisible={isVisible}>
        <LoginPageFormSC isVisible={isVisible}>
          <LoginPageForm isFocus={isVisible} />
          <EnterPinSC>Enter PIN (1234) </EnterPinSC>
          <CancelSC onClick={handleSubmit}>Cancel</CancelSC>
        </LoginPageFormSC>
        <LoginPageButton isVisible={isVisible} onClick={() => handleSubmit()}>
          <div>{"=>"}</div>
        </LoginPageButton>
        <TimeUI isVisible={isVisible} />
      </LoginPageBlurSC>
    </LoginPageSC>
  );
};

export default LoginPage;
