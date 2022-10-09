import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../store/hooks/redux";
import { putIsAuth } from "../../../store/reducers/InputSlice/InputSlice";
import { useLoginPageFormStyle } from "./style";
import { ILoginPageFormProps, ILoginPageFormValues } from "./types";

const LoginPageForm = ({ isFocus }: ILoginPageFormProps) => {
  const { LoginPageInput, LoginPageInputError } = useLoginPageFormStyle();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<ILoginPageFormValues>();

  const onSubmit = (data: ILoginPageFormValues) => {
    data && dispatch(putIsAuth(true));
  };

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
