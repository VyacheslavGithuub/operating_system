import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../store/hooks/redux";
import { Act_PutIsOpenNote } from "../../../../../store/reducers/NotesSlice/NotesSlice";
import { INotesListProps } from "./types";

export const useNotesItem = () => {
  const dispatch = useAppDispatch();
  const { isOpenNote } = useAppSelector((state) => state.NotesSlice);

  // ОТКРЫТЬ / ЗАКРЫТЬ
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const changeIsOpen = () => {
    setIsOpen(true);
    dispatch(Act_PutIsOpenNote(true));
  };
  const handleCloseNote = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(false);
    dispatch(Act_PutIsOpenNote(false));
  };

  // ФОРМА
  const { register, handleSubmit } = useForm<INotesListProps>();
  const onSubmit: SubmitHandler<INotesListProps> = (data) => console.log(data);

  return {
    isOpen,
    onSubmit,
    register,
    handleSubmit,
    changeIsOpen,
    handleCloseNote,
  };
};
