import React from "react";
import { useAppDispatch } from "../../../store/hooks/redux";
import {
  putAuth,
  putBlur,
  putVisible_pinCode,
} from "../../../store/reducers/InputSlice/InputSlice";
import TransparentButtonUI from "../../../UI/TransparentButtonUI/TransparentButtonUI";
import IconRightArrow from "../../Icon/IconRightArrow";
import { useButtonExitStyle } from "./style";

const ButtonExit = () => {
  const { ButtonExitSC, IconPosSC } = useButtonExitStyle();
  const dispatch = useAppDispatch();
  const handleCloses = () => {
    dispatch(putAuth(false));
    dispatch(putBlur(false));
    dispatch(putVisible_pinCode(false));
  };
  return (
    <ButtonExitSC>
      <TransparentButtonUI onClick={handleCloses} size="small">
        <IconPosSC>
          <IconRightArrow />
        </IconPosSC>
      </TransparentButtonUI>
    </ButtonExitSC>
  );
};

export default ButtonExit;
