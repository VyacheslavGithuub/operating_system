import { useAppSelector } from "../../../../store/hooks/redux";
import { ItemNotes } from "../../../../store/reducers/NotesSlice/NotesSlice";

export const useNotes = () => {
  const { listNotes } = useAppSelector((state) => state.NotesSlice);

  // Сортируем по времени
  const sortCards = (a: any, b: any) => {
    return b.data > a.data ? 1 : -1;
  };
  // Копируем объект с item. Необходимо для для сортировки и дальнейшего .map
  let newArrNotes: ItemNotes[] = [];
  newArrNotes = [...listNotes].sort(sortCards);

  return { newArrNotes };
};
