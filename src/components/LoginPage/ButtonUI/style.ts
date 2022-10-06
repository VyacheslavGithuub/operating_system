import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: translate(0%, 0%);  
  }
  40% {
    transform: translate(0%, 0%);  
  }
  43% {
    transform: translate(0px, -30px); 
  }
  47% {
    transform: translate(0%, 0%);  
  }
  50% {
    transform: translate(0%, -10px);  
  }
  53% {
    transform: translate(0%, 0%);  
  }
  57% {
    transform: translate(0%, -10px);  
  }
  60% {
    transform: translate(0%, 0px);  
  }
  100% {
    transform: translate(0%, 0px);  
  }
`;

const ButtonSC = styled.button`
  width: 150px;
  height: 50px;

  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
  border-radius: 40px;
  cursor: pointer;
  color: wheat;
  font-size: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 50px;
  left: calc(50% - 75px);

  animation: ${rotate} 5s linear infinite;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.2);
    animation: none;
  }

  @media (max-width: 1024px) {
    width: 120px;
    font-size: 22px;
  }
  @media (max-width: 800px) {
    width: 100px;
    font-size: 18px;
  }
  @media (max-width: 600px) {
    width: 80px;
    font-size: 15px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;

export const useButtonSCStyle = () => ({
  ButtonSC,
});
