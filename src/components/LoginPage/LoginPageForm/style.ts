import styled from "styled-components";

const LoginPageInput = styled.input<{ error: boolean }>`
  z-index: 1;
  width: 193px;
  height: 80px;
  padding-left: 7px;
  color: ${({ theme }) => theme.auxiliary};
  border-radius: 10px;
  margin-bottom: 7px;
  outline: none;
  font-size: 3em;
  text-align: center;
  letter-spacing: 5px;

  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: ${({ error }) =>
    error ? "rgb(255, 8, 71, 0.3)" : "rgba(255, 255, 255, 0.1)"};
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);

  @media (max-width: 800px) {
    width: 184px;
    height: 70px;
  }
  @media (max-width: 600px) {
    width: 150px;
    height: 60px;
    font-size: 2.5em;
    color: ${({ theme }) => theme.main};
  }
  @media (max-width: 400px) {
    width: 117px;
    height: 50px;
    font-size: 2em;
  }
`;

export const useLoginPageFormStyle = () => ({
  LoginPageInput,
});
