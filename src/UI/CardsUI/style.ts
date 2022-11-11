import styled from "styled-components";

const CardsUIContainerSC = styled.div`
  background-color: ${(props) => props.theme.BagSmallCard};
  border-radius: 15px;

  &:hover {
    fill: white;
  }
  & > a {
    width: 270px;

    display: flex;
    border-radius: 15px;
    text-decoration: none;
    background-color: ${(props) => props.theme.BagSmallCard};
    fill: #b2bec3;

    @media (max-width: 400px) {
      width: calc(100vw - 20px);
    }
  }
`;
const CardsShadowSC = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-radius: 15px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
  transition: 0.4s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    & h3 {
      color: white;
    }
  }

  @media (max-width: 1400px) {
    align-items: center;
  }
  @media (max-width: 600px) {
    align-items: center;
    background: none;
  }
`;
const CardTitleSC = styled.h3`
  color: #b2bec3;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
  line-height: 150%;
  margin-left: 10px;

  @media (max-width: 1200px) {
    text-align: center;
    margin-left: 0;
  }
  @media (max-width: 600px) {
    font-size: 20px;
    color: white;
  }
`;
const CardIconSC = styled.div`
  @media (min-width: 1400px) {
    width: max-content;
    position: relative;
    left: calc(80% - 50px);
  }
`;

export const useCardsUIStyled = () => ({
  CardsUIContainerSC,
  CardsShadowSC,
  CardTitleSC,
  CardIconSC,
});
