import styled from "styled-components";

const CardsUIContainerSC = styled.div<{ variant: string }>`
  background-color: #c3a281;
  height: 150px;
  border-radius: 15px;
  flex: 1 1 calc((100% / 4) - 2rem);

  @media (max-width: 800px) {
    flex: 1 1 calc((100% / 3) - 2rem);
  }
  @media (max-width: 600px) {
    flex: 1 1 calc((100% / 2) - 2rem);
  }
  @media (max-width: 400px) {
    flex: 1 1 calc((90%) - 2rem);
    margin: 0px 10px;
  }
`;
const CardsShadowSC = styled.div<{ variant: string }>`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
  transition: 0.4s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    & h3 {
      color: ${({ variant }) => (variant === "small" ? "white" : "")};
    }
  }
`;
const CardTitleSC = styled.h3<{ variant: string }>`
  color: ${({ variant }) => (variant === "small" ? "#b2bec3" : "white")};
  font-size: ${({ variant }) => (variant === "small" ? "20px" : "1.5rem")};
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
  line-height: 150%;
  margin-left: 10px;

  @media (max-width: 1200px) {
    font-size: 16px;
    text-align: center;
    margin-left: 0;
  }
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
const CardIconSC = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const useCardsUIStyled = () => ({
  CardsUIContainerSC,
  CardsShadowSC,
  CardTitleSC,
  CardIconSC,
});
