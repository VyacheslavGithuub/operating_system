import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../store/hooks/redux";
import { Act_AddNote } from "../../../../../store/reducers/NotesSlice/NotesSlice";
import { v4 } from "uuid";

export const useButtonAddNote = () => {
  const diaspatch = useAppDispatch();
  const { isOpenNote } = useAppSelector((state) => state.NotesSlice);

  let date = new Date();
  let hours = date.getHours();
  let minuts = date.getMinutes();
  let seconds = date.getSeconds();
  let newDate = `${hours}.${minuts}.${seconds}`;

  const handleSendNewItem = () => {
    let arr = {
      id: v4(),
      date: newDate,
      title: "",
      body: "",
      order: 0,
    };
    diaspatch(Act_AddNote(arr));
  };

  return {
    isOpenNote,
    handleSendNewItem,
  };
};
