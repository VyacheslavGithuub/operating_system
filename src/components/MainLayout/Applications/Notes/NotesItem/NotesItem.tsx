import React from "react";
import IconCheckMark from "../../../../Icon/IconCheckMark";
import { useNotesItemStyle } from "./style";
import { INotesListProps } from "./types";
import { useNotesItem } from "./useNotesItem";

const NotesItem = ({ date, title, body }: INotesListProps) => {
  const {
    NotesItemSC,
    CheckMarkSC,
    NotesItemTopSC,
    NotesItemDateSC,
    NotesItemBodySC,
    NotesItemTitleSC,
  } = useNotesItemStyle();
  const {
    isOpen,
    onSubmit,
    register,
    handleSubmit,
    changeIsOpen,
    handleCloseNote,
  } = useNotesItem();

  return (
    <NotesItemSC
      isOpen={isOpen}
      onSubmit={handleSubmit(onSubmit)}
      onClick={() => changeIsOpen()}
    >
      <NotesItemTopSC>
        <NotesItemTitleSC
          isOpen={isOpen}
          maxLength={60}
          placeholder="NEW NOTE"
          defaultValue={title}
          autoComplete="off"
          {...register("title")}
        />
        <CheckMarkSC
          isOpen={isOpen}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            handleCloseNote(e)
          }
        >
          <IconCheckMark />
        </CheckMarkSC>
      </NotesItemTopSC>
      <NotesItemBodySC
        isOpen={isOpen}
        defaultValue={body}
        autoComplete="off"
        placeholder="text..."
        {...register("body")}
      />
      <NotesItemDateSC isOpen={isOpen}>{date}</NotesItemDateSC>
    </NotesItemSC>
  );
};

export default React.memo(NotesItem);
