import { createSlice } from "@reduxjs/toolkit";
import { IInputSlice } from "./types";

const initialState: IInputSlice = {
  isAuth: false,
  isVisible_pinCode: false,
  closeBlur: false,
};

export const InputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    putIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    putInput: (state, action) => {
      state.isVisible_pinCode = action.payload;
    },
    setCloseBlur: (state, action) => {
      state.closeBlur = action.payload;
    },
  },
});

export const { putIsAuth, putInput, setCloseBlur } = InputSlice.actions;
export default InputSlice.reducer;
