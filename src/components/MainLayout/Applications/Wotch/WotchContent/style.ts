import styled from "styled-components";

const WotchContentSC = styled.div`
  height: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const useWotchContentStyle = () => ({
  WotchContentSC,
});
