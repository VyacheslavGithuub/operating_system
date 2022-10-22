import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/redux";
import { Act_AddNote } from "../../../../store/reducers/NotesSlice/NotesSlice";
import ButtonAddNote from "./ButtonAddNote/ButtonAddNote";
import { v4 } from "uuid";
import { useNotesStyle } from "./style";
import NotesItem from "./NotesItem/NotesItem";

const Notes = () => {
  const { NotesContainerSC, AddNewTitleSC } = useNotesStyle();

  const diaspatch = useAppDispatch();
  const { listNotes } = useAppSelector((state) => state.NotesSlice);
  // console.log(listNotes);

  const handleSendNewItem = () => {
    let arr = {
      id: v4(),
      date: "10-10-2020",
      title: "TITLE",
      body: "bodybodybodybodybodybodybody",
    };
    diaspatch(Act_AddNote(arr));
  };
  return (
    <NotesContainerSC>
      <AddNewTitleSC onClick={() => handleSendNewItem()}>+</AddNewTitleSC>
      {listNotes.map((i) => (
        <NotesItem key={i.id} date={i.date} title={i.title} body={i.body} />
      ))}
    </NotesContainerSC>
  );
};

export default React.memo(Notes);
