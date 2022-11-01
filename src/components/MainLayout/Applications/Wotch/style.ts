import styled from "styled-components";

const WotchContainerSC = styled.div`
  width: 100%;
  height: 100%;
`;
const WotchHeaderSC = styled.div`
  height: 100px;
`;
const WotchContentSC = styled.div`
  height: calc(100% - 100px);
`;

export const WotchContainer = () => ({
  WotchHeaderSC,
  WotchContentSC,
  WotchContainerSC,
});
