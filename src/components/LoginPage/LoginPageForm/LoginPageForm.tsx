import React from "react";
import { useForm } from "react-hook-form";
import { useLoginPageFormStyle } from "./style";

const LoginPageForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const { LoginPageInput } = useLoginPageFormStyle();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginPageInput
        autoComplete="off"
        type="number"
        {...register("pin", {
          required: true,
          validate: {
            value: (i) => parseInt(i) === 1234,
          },
        })}
      />
    </form>
  );
};

export default React.memo(LoginPageForm);
