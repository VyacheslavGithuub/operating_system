import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface ItemNotes {
  id: string;
  date: string;
  title: string;
  body: string;
  order: string;
}
interface listNotes {
  listNotes: ItemNotes[];
  isOpenNote: boolean;
}
const initialState: listNotes = {
  listNotes: [],
  isOpenNote: false,
};

export const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    Act_AddNote: (state, action: PayloadAction<any>) => {
      state.listNotes.push(action.payload);
    },
    Act_PutNote: (state, action: PayloadAction<any>) => {
      state.listNotes = action.payload;
    },
    Act_PutIsOpenNote: (state, action: PayloadAction<boolean>) => {
      state.isOpenNote = action.payload;
    },
  },
});

export const { Act_AddNote, Act_PutNote, Act_PutIsOpenNote } =
  NotesSlice.actions;
export const selectNotes = (state: RootState) => state.NotesSlice.listNotes;
export default NotesSlice.reducer;
