import styled, { keyframes } from "styled-components";

const AnimHare = keyframes`
  50%{
  }
  100%{
    opacity: 1;
  }
`;

const NotesItemSC = styled.div`
  opacity: 0;
  animation: ${AnimHare} 1s linear forwards;
  height: 15%;
  padding: 10px;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.BagSmallCard},
    rgba(0, 0, 0, 0) 90%
  );
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;
`;
const NotesItemTitle = styled.div`
  letter-spacing: 3px;
  color: ${(props) => props.theme.NotesItemTitle};
  font-size: 22px;
`;
const NotesItemBody = styled.div`
  color: ${(props) => props.theme.NotesItemSubtitle};
  font-size: 18px;
`;
const NotesItemDate = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.NotesItemDate};
`;
export const useNotesItemStyle = () => ({
  NotesItemSC,
  NotesItemTitle,
  NotesItemDate,
  NotesItemBody,
});
