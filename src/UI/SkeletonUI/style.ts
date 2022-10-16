import { ISkeletonUIProps } from "./types.d";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
 0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const SkeletonSC = styled.div<ISkeletonUIProps>`
  width: ${({ width }) => (width ? width + "px" : "100%")};
  height: ${({ height }) => (height ? height + "px" : "100%")};
  border-radius: ${({ radius }) => (radius ? radius + "px" : "0px")};

  animation: ${animation} 2s ease infinite;
  background: linear-gradient(-45deg, #ffffff, #dcdcdc, #c0c0c0, #ffffff);
  background-size: 500% 400%;
`;

export const useSkeletonStyle = () => ({
  SkeletonSC,
});
