import styled from "styled-components";

const NotesContainerSC = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 5px;
  overflow: auto;

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
const AddNewTitleSC = styled.button`
  background-color: #f1c40f;
  color: black;
  width: 70px;
  height: 70px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  font-size: 55px;
  z-index: 10;
  padding: 0px 5px 0px 7px;
  position: absolute;
  right: 30px;
  bottom: 20px;

  @media (max-width: 600px) {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 60px;
    height: 60px;
    padding: 0px 5px 0px 7px;
  }
`;

export const useNotesStyle = () => ({
  NotesContainerSC,
  AddNewTitleSC,
});
