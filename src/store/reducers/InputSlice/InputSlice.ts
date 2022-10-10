import { createSlice } from "@reduxjs/toolkit";
import { IInputSlice } from "./types";

const initialState: IInputSlice = {
  isAuth: false,
  isVisible_pinCode: false,
  isBlur: false,
};

export const InputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    putAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    putBlur: (state, action) => {
      state.isBlur = action.payload;
    },
    putVisible_pinCode: (state, action) => {
      state.isVisible_pinCode = action.payload;
    },
  },
});

export const { putAuth, putBlur, putVisible_pinCode } = InputSlice.actions;
export default InputSlice.reducer;
