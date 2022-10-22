import styled from "styled-components";

const BgThemeSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;
const BgThemeButtonSC = styled.div`
  margin-right: 15px;
  width: 150px;

  @media (max-width: 960px) {
    width: 120px;
  }
  @media (max-width: 600px) {
    width: 30%;
    margin-right: 0px;
  }
`;
const BgThemeTitleSC = styled.div`
  color: ${(props) => props.theme.auxiliary};
  line-height: 170%;
  font-family: roboto;
  font-weight: 500;
  letter-spacing: 2px;
  @media (max-width: 960px) {
    line-height: 100%;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const BlockButtonSC = styled.div`
  display: flex;
  @media (max-width: 960px) {
    height: 40px;
  }
  @media (max-width: 600px) {
    height: 30px;
  }
`;
export const useBackgroundThemeStyle = () => ({
  BgThemeSC,
  BlockButtonSC,
  BgThemeTitleSC,
  BgThemeButtonSC,
});
