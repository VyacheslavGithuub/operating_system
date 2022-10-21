import styled from "styled-components";

const BgThemeSC = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;
const BgThemeButtonSC = styled.div`
  margin-right: 15px;

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
`;
export const useBackgroundThemeStyle = () => ({
  BgThemeSC,
  BgThemeTitleSC,
  BgThemeButtonSC,
});
