import styled from "styled-components";

const ButtonSC = styled.button`
  width: 100%;
  height: 100%;

  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
  border-radius: 40px;
  cursor: pointer;
  color: wheat;
  font-size: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const useTButtonUIStyle = () => ({
  ButtonSC,
});
