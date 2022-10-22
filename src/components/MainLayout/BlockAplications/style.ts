import styled from "styled-components";

const BlockAplicationsSC = styled.div`
  border-radius: 15px;
  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: ${(props) => props.theme.BagWeatherBlock};
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
  font-size: 22px;
  padding: 15px;
  height: 60vh;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    height: 550px;
    padding: 5px;
  }
`;
export const useBlockAplicationsStyle = () => ({
  BlockAplicationsSC,
});
