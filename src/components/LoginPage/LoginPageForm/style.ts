import styled from "styled-components";

const LoginPageInput = styled.input`
  z-index: 1;
  width: 193px;
  height: 80px;
  padding-left: 7px;
  color: white;
  border-radius: 10px;
  margin-bottom: 7px;
  outline: none;
  font-size: 3em;
  text-align: center;
  letter-spacing: 5px;

  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);

  @media (max-width: 800px) {
    width: 184px;
    height: 70px;
  }
  @media (max-width: 600px) {
    width: 150px;
    height: 60px;
    font-size: 2.5em;
  }
  @media (max-width: 400px) {
    width: 117px;
    height: 50px;
    font-size: 2em;
  }
`;
const LoginPageInputError = styled.div`
  z-index: 0;
  width: 205px;
  height: 84px;
  border-radius: 10px;
  background-color: rgba(255, 0, 0, 0.2);
  position: absolute;
  top: 0px;
  left: 0;
  @media (max-width: 800px) {
    width: 195px;
    height: 75px;
  }
  @media (max-width: 600px) {
    width: 128px;
    height: 65px;
  }
  @media (max-width: 400px) {
    width: 128px;
    height: 55px;
  }
`;

export const useLoginPageFormStyle = () => ({
  LoginPageInput,
  LoginPageInputError,
});
