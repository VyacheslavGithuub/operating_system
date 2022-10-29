import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../store/hooks/redux";
import { putAuth } from "../../../store/reducers/InputSlice/InputSlice";
import { ILoginPageFormValues } from "./types";

export const useLoginPageForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<ILoginPageFormValues>();

  const error = errors.pin?.ref?.value.length === 4 ? true : false;

  const onSubmit = (data: ILoginPageFormValues) => {
    data && dispatch(putAuth(true));
  };

  React.useEffect(() => {
    setFocus("pin");
  }, [setFocus]);

  return {
    error,
    setFocus,
    register,
    onSubmit,
    handleSubmit,
  };
};
