import styled from "styled-components";

const MainLayoutSC = styled.div`
  position: relative;
  width: 70%;
  max-width: 1130px;
  padding-top: 15px;
  margin: 0 auto;
  @media (max-width: 1600px) {
    width: 80%;
  }
  @media (max-width: 1024px) {
    width: 95%;
  }
`;

export const useMainLayoutStyle = () => ({
  MainLayoutSC,
});
