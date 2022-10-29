import React from "react";
import { useLoginPageFormStyle } from "./style";
import { useLoginPageForm } from "./useLoginPageForm";

const LoginPageForm = () => {
  const { LoginPageInput } = useLoginPageFormStyle();
  const { error, register, onSubmit, handleSubmit } = useLoginPageForm();

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <LoginPageInput
        autoComplete="off"
        maxLength={4}
        required={true}
        type="password"
        error={error}
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
