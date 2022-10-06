import { useState } from "react";
import ButtonUI from "./ButtonUI/ButtonUI";
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
          <LoginPageForm />
          <EnterPinSC>Enter PIN (1234) </EnterPinSC>
          <CancelSC onClick={handleSubmit}>Cancel</CancelSC>
        </LoginPageFormSC>
        <ButtonUI onClick={() => handleSubmit()}>
          <div>{"=>"}</div>
        </ButtonUI>
        <TimeUI isVisible={isVisible} />
      </LoginPageBlurSC>
    </LoginPageSC>
  );
};

export default LoginPage;
