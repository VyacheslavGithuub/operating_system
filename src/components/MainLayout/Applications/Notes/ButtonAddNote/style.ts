import styled from "styled-components";

const ButtonAddNoteSC = styled.button<{ isOpenNote: boolean }>`
  opacity: ${({ isOpenNote }) => isOpenNote && "0"};
  transition: opacity 0.5s;
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
    padding: 0px 5px 5px 6px;
  }
`;

export const useButtonAddNoteStyled = () => ({
  ButtonAddNoteSC,
});
