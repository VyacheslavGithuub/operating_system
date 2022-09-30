import styled from "styled-components"

const LoginPageSC = styled.div`
  background-image: url(https://images.wallpaperscraft.ru/image/single/paporotnik_list_rastenie_zelenyj_119970_1920x1080.jpg);
  background-repeat: no-repeat;
  -moz-background-size: 100%;
    -webkit-background-size: 100%; 
    -o-background-size: 100%;
  background-size: 100% 100%;
  min-height: 100vh;
  
  @media(max-width: 10242px){
    background-image: url(https://images.wallpaperscraft.ru/image/single/paporotnik_list_rastenie_zelenyj_119970_800x1200.jpg)
  }
`
export const useLoginPageStyle = () => ({
  LoginPageSC
})