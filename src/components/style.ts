import styled from "styled-components";

const AppSC = styled.div`
  background: url(https://images.wallpaperscraft.ru/image/single/paporotnik_list_rastenie_zelenyj_119970_1920x1080.jpg)
    50% 50% no-repeat;
  min-height: 100vh;

  @media (max-width: 900px) {
    background: url(https://images.wallpaperscraft.ru/image/single/paporotnik_list_rastenie_zelenyj_119970_800x1200.jpg)
      50% 50% no-repeat;
  }
`;

export const useAppStyle = () => ({
  AppSC,
});
