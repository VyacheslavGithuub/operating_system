import styled from "styled-components";

const MainLayoutSC = styled.div`
  position: relative;
  width: 80%;
  padding-top: 15px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 95%;
  }
`;

export const useMainLayoutStyle = () => ({
  MainLayoutSC,
});
