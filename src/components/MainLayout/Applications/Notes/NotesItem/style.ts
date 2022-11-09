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
  height: ${({ isOpen }) => (isOpen ? "calc(100% - 30px)" : "15%")};
  overflow: hidden;

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
const NotesItemBodySC = styled.textarea<IBodyProps>`
  width: 85%;
  height: ${({ isOpen }) => (isOpen ? "90%" : "17px")};
  overflow: hidden;
  resize: none;
  color: ${(props) => props.theme.NotesItemSubtitle};
  font-size: 18px;
  cursor: ${({ isOpen }) => !isOpen && "pointer"};

  outline: none;
  border: none;
  background: none;

  &::placeholder {
    color: ${(props) => props.theme.NotesItemSubtitle};
  }

  @media (min-width: 600px) {
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: linear-gradient(
        180deg,
        ${(props) => props.theme.BagSmallCard},
        rgba(250, 250, 250, 0.3)
      );
    }
  }
`;
interface IDateProps {
  isOpen: boolean;
}
const NotesItemDateSC = styled.div<IDateProps>`
  margin-top: 3px;
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
  fill: ${({ theme }) => theme.main};
  display: ${({ isOpen }) => !isOpen && "none"};
`;
const NotesItemTopSC = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const useNotesItemStyle = () => ({
  NotesItemSC,
  CheckMarkSC,
  NotesItemTopSC,
  NotesItemDateSC,
  NotesItemBodySC,
  NotesItemTitleSC,
});
