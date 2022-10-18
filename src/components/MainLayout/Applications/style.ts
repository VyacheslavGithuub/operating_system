import styled from "styled-components";

const AContainerSC = styled.div`
  width: 100%;
`;
const AContentSC = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const useApplicationsStyle = () => ({
  AContainerSC,
  AContentSC,
});
