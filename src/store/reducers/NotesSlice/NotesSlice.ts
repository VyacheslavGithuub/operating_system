import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ItemNotes {
  id: string;
  date: string;
  title: string;
  body: string;
}
interface listNotes {
  listNotes: ItemNotes[];
}
const initialState: listNotes = {
  listNotes: [],
};

export const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    Act_AddNote: (state, action: PayloadAction<any>) => {
      state.listNotes.push(action.payload);
    },
  },
});

export const { Act_AddNote } = NotesSlice.actions;
export const selectNotes = (state: RootState) => state.NotesSlice.listNotes;
export default NotesSlice.reducer;
