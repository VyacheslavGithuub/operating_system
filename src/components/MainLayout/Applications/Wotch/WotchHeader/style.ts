import styled from "styled-components";

const WotchHeaderSC = styled.div`
  display: flex;
  justify-content: space-around;
`;
const WotchHeaderItemSC = styled.div`
  width: 25%;
  button {
    font-size: 18px;
    line-height: 200%;
    color: ${({ theme }) => theme.main};
  }
`;

export const useWotchHeaderStyle = () => ({
  WotchHeaderSC,
  WotchHeaderItemSC,
});
