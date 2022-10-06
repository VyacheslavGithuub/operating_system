import React from "react";
import { useForm } from "react-hook-form";
import { useLoginPageFormStyle } from "./style";

interface ILoginPageFormProps {
  isFocus: boolean;
}
const LoginPageForm = ({ isFocus }: ILoginPageFormProps) => {
  const { register, handleSubmit, setFocus } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const { LoginPageInput } = useLoginPageFormStyle();

  React.useEffect(() => {
    setFocus("pin");
  }, [isFocus, setFocus]);

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <LoginPageInput
        autoComplete="off"
        type="password"
        {...register("pin", {
          required: true,
          pattern: /^[0-9]$/,
          valueAsNumber: true,
          maxLength: 4,

          validate: {
            value: (i) => parseInt(i) === 1234,
          },
        })}
      />
    </form>
  );
};

export default React.memo(LoginPageForm);
