import styled from "styled-components";

const IconSC = styled.div`
  margin-right: 5px;
  fill: ${(props) => props.theme.auxiliary};
  margin-bottom: 10px;
`;
const TitleSC = styled.div`
  letter-spacing: 3px;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.auxiliary};
`;
const IconAndTitleSC = styled.div`
  display: flex;
  align-items: baseline;

  @media (max-width: 600px) {
    display: none;
  }
`;
export const useIconAndTitleStyle = () => ({
  IconSC,
  TitleSC,
  IconAndTitleSC,
});
