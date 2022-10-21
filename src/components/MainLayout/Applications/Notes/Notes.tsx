import React from "react";
import { useNotesStyle } from "./style";

const Notes = () => {
  const { NotesContainerSC } = useNotesStyle();

  return <NotesContainerSC>Notes</NotesContainerSC>;
};

export default Notes;
