import styled from "styled-components";

const MrCoderSC = styled.div`
  position: absolute;
  top: 0%;
  left: 2%;

  @media (max-width: 1735px) {
    display: none;
  }
`;

export const useMrCoderStyled = () => ({
  MrCoderSC,
});
