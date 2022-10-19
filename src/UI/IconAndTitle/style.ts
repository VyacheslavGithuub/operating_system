import styled from "styled-components";

const IconSC = styled.div`
  margin-right: 5px;
  fill: ${(props) => props.theme.main};
  margin-bottom: 10px;
`;
const TitleSC = styled.div`
  letter-spacing: 3px;
  font-size: 1.5rem;
  font-weight: 500;
`;
const IconAndTitleSC = styled.div`
  display: flex;
  align-items: baseline;
`;
export const useIconAndTitleStyle = () => ({
  IconSC,
  TitleSC,
  IconAndTitleSC,
});
