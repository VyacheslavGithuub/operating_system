import styled from "styled-components";

const ButtonExitSC = styled.div`
  @media (max-width: 960px) {
    height: 40px;
  }
  @media (max-width: 600px) {
    height: 30px;
  }
`;
const IconPosSC = styled.div`
  position: relative;
  bottom: 2px;
  right: 2px;
  fill: ${(props) => props.theme.BagSmallCard};
  transform: rotate(180deg);

  @media (max-width: 450px) {
    bottom: 3px;
    right: 2px;
  }
`;

export const useButtonExitStyle = () => ({
  ButtonExitSC,
  IconPosSC,
});
