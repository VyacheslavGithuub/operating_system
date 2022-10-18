import styled from "styled-components";

const MainLayoutSC = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }
`;

export const useMainLayoutStyle = () => ({
  MainLayoutSC,
});
