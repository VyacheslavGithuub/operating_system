import styled from "styled-components";

const AContainerSC = styled.div`
  margin-top: 40px;
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
