import React from "react";
import ButtonAddNote from "./ButtonAddNote/ButtonAddNote";
import { useNotesStyle } from "./style";
import NotesItem from "./NotesItem/NotesItem";
import { useNotes } from "./useNotes";

const Notes = () => {
  const { NotesContainerSC } = useNotesStyle();
  const { newArrNotes } = useNotes();

  return (
    <NotesContainerSC>
      <ButtonAddNote />
      {newArrNotes.map((i) => (
        <NotesItem key={i.id} date={i.date} title={i.title} body={i.body} />
      ))}
    </NotesContainerSC>
  );
};

export default React.memo(Notes);
