import { useButtonAddNoteStyled } from "./style";
import { useButtonAddNote } from "./useButtonAddNote";

const ButtonAddNote = () => {
  const { ButtonAddNoteSC } = useButtonAddNoteStyled();
  const { isOpenNote, handleSendNewItem } = useButtonAddNote();
  return (
    <ButtonAddNoteSC
      onClick={() => handleSendNewItem()}
      isOpenNote={isOpenNote}
    >
      +
    </ButtonAddNoteSC>
  );
};

export default ButtonAddNote;
