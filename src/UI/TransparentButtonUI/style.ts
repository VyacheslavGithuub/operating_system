import styled from "styled-components";

const ButtonSC = styled.button<{ size?: string }>`
  width: ${({ size }) => (size === "small" ? "120px" : "100%")};
  height: ${({ size }) => (size === "small" ? "50px" : "100%")};

  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 2px 2px 4px rgb(0 0 0 / 25%);
  border-radius: 40px;
  cursor: pointer;
  font-size: ${({ size }) => (size === "small" ? "18px" : "100%")};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.2);
  }
  @media (max-width: 450px) {
    width: ${({ size }) => (size === "small" ? "90px" : "100%")};
    height: ${({ size }) => (size === "small" ? "40px" : "100%")};
  }
`;

export const useTButtonUIStyle = () => ({
  ButtonSC,
});
