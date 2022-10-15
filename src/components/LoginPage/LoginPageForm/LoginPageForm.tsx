import React from "react";
import { useLoginPageFormStyle } from "./style";
import { ILoginPageFormProps } from "./types";
import { useLoginPageForm } from "./useLoginPageForm";

const LoginPageForm = ({ isFocus }: ILoginPageFormProps) => {
  const { LoginPageInput, LoginPageInputError } = useLoginPageFormStyle();
  const { errors, setFocus, register, onSubmit, handleSubmit } =
    useLoginPageForm();

  React.useEffect(() => {
    setFocus("pin");
  }, [isFocus, setFocus]);

  return (
    <form onChange={handleSubmit(onSubmit)}>
      {errors.pin && <LoginPageInputError />}
      <LoginPageInput
        autoComplete="off"
        maxLength={4}
        required={true}
        type="password"
        {...register("pin", {
          validate: {
            value: (i) => parseInt(i) === 1234,
          },
        })}
      />
    </form>
  );
};

export default React.memo(LoginPageForm);
