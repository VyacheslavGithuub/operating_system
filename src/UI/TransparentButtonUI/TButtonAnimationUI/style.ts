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

const ButtonAnimationSC = styled.button<{ isVisible: boolean }>`
  width: 150px;
  height: 50px;
  background: none;
  border: none;
  padding: 0;
  cursor: ${({ isVisible }) => (isVisible ? "auto" : "pointer")};

  position: absolute;
  bottom: 50px;
  left: calc(50% - 75px);

  opacity: ${({ isVisible }) => (isVisible ? "0" : "1")};
  transition: opacity 0.2s ease;
  animation: ${rotate} 5s linear infinite;

  &:hover {
    animation: none;
  }

  @media (max-width: 1024px) {
    width: 120px;
    font-size: 22px;
    left: calc(50% - 60px);
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    width: 100px;
    height: 40px;
    font-size: 15px;
    left: calc(50% - 50px);
  }
`;

export const useTButtonAnimationStyle = () => ({
  ButtonAnimationSC,
});
