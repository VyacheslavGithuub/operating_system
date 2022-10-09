import styled, { keyframes } from "styled-components";

const arrwUp = keyframes`
 0% {
    bottom: 0px;
    opacity: 1;
  }
  100% {
    bottom: 30px;
    opacity: 0;
  }
`;

const UpArrowsSC = styled.div`
  width: 25px;
  height: 25px;
  border-top: 5px solid white;
  border-right: 5px solid white;
  margin-right: 60px;
  transform: rotate(-45deg);
`;
const UpArrowsAnimationSC = styled.div`
  position: absolute;
  bottom: 0px;
  animation: ${arrwUp} 2s infinite;
`;
const UpArrowsAnimationTwoSC = styled(UpArrowsAnimationSC)`
  opacity: 0;
  animation-delay: 1s;
`;

export const useAnimatedUpArrowsStyle = () => ({
  UpArrowsSC,
  UpArrowsAnimationSC,
  UpArrowsAnimationTwoSC,
});
