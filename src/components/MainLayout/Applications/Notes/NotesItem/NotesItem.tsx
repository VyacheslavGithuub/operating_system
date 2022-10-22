import React from "react";
import { useNotesItemStyle } from "./style";
interface INotesListProps {
  date: string;
  title: string;
  body: string;
}
const NotesItem = ({ date, title, body }: INotesListProps) => {
  const { NotesItemSC, NotesItemTitle, NotesItemDate, NotesItemBody } =
    useNotesItemStyle();
  return (
    <NotesItemSC>
      <NotesItemTitle>{title}</NotesItemTitle>
      <NotesItemBody>{body}</NotesItemBody>
      <NotesItemDate>{date}</NotesItemDate>
    </NotesItemSC>
  );
};

export default NotesItem;
