import { createSlice } from "@reduxjs/toolkit";

interface IInputSlice {
  isAuth: boolean;
}

const initialState: IInputSlice = {
  isAuth: false,
};

export const InputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    putIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { putIsAuth } = InputSlice.actions;
export default InputSlice.reducer;
