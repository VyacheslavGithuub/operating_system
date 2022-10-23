import styled, { keyframes } from "styled-components";

const AnimHare = keyframes`
  50%{
  }
  100%{
    opacity: 1;
  }
`;
interface IItemProps {
  isOpen: boolean;
}
const NotesItemSC = styled.form<IItemProps>`
  z-index: ${({ isOpen }) => (isOpen ? "20" : 0)};
  opacity: 0;
  animation: ${AnimHare} 1s linear forwards;
  height: ${({ isOpen }) => (isOpen ? "550px" : "15%")};
  overflow-y: auto;
  transition: height 0.3s, background 3s, transform 2s;
  padding: 10px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.BagSmallCard},
    rgba(0, 0, 0, 0) 90%
  );

  margin-bottom: 10px;
  border-radius: 10px;
  cursor: ${({ isOpen }) => (isOpen ? "auto" : "pointer")};

  @media (max-width: 600px) {
    height: ${({ isOpen }) => (isOpen ? "522px" : "15%")};
  }
`;
interface ITitleProps {
  isOpen: boolean;
}
const NotesItemTitleSC = styled.input<ITitleProps>`
  width: 90%;
  letter-spacing: 3px;
  color: ${(props) => props.theme.NotesItemTitle};
  font-size: 22px;
  cursor: ${({ isOpen }) => !isOpen && "pointer"};

  outline: none;
  border: none;
  background: none;

  &::placeholder {
    color: ${(props) => props.theme.NotesItemTitle};
  }
`;
interface IBodyProps {
  isOpen: boolean;
}
const NotesItemBodySC = styled.input<IBodyProps>`
  width: 95%;
  color: ${(props) => props.theme.NotesItemSubtitle};
  font-size: 18px;
  cursor: ${({ isOpen }) => !isOpen && "pointer"};

  outline: none;
  border: none;
  background: none;

  &::placeholder {
    color: ${(props) => props.theme.NotesItemSubtitle};
  }
`;
interface IDateProps {
  isOpen: boolean;
}
const NotesItemDateSC = styled.div<IDateProps>`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.NotesItemDate};
  display: ${({ isOpen }) => isOpen && "none"};
`;
interface ICheckMarkProps {
  isOpen: boolean;
}
const CheckMarkSC = styled.div<ICheckMarkProps>`
  cursor: pointer;
  position: absolute;
  top: 10;
  right: 20px;
  display: ${({ isOpen }) => !isOpen && "none"};
`;

export const useNotesItemStyle = () => ({
  NotesItemSC,
  CheckMarkSC,
  NotesItemDateSC,
  NotesItemBodySC,
  NotesItemTitleSC,
});
