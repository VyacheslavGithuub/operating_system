import styled from "styled-components";

const LoginPageInput = styled.input`
  width: 200px;
  height: 80px;
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
`;

export const useLoginPageFormStyle = () => ({
  LoginPageInput,
});
