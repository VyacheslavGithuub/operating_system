import styled from "styled-components";

const AContainerSC = styled.div`
  margin: 10px 0px;
  width: 100%;
  overflow: hidden;
  flex-wrap: nowrap;
`;
const AContentSC = styled.div<{ swipe: number }>`
  position: relative;
  top: 0px;
  left: ${({ swipe }) => swipe + "px"};

  display: flex;
  gap: 10px;
  transition: all linear 0.3s;
`;
const ATestSC = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  transition: all linear 0.3s;
`;

const AArowSC = styled("div")`
  border: solid black;
  display: inline-block;
  border-width: 0 15px 15px 0;
  padding: 15px;

  &:hover {
    border-color: #c8d6e5;
  }
`;
const AArowRightSC = styled(AArowSC)`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

  z-index: 10;
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
`;
const AArowLeftSC = styled(AArowSC)`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);

  z-index: 10;
  position: absolute;
  top: 50px;
  left: 50px;
  cursor: pointer;
`;

export const useApplicationsStyle = () => ({
  AContainerSC,
  AContentSC,
  AArowRightSC,
  AArowLeftSC,
  ATestSC,
});
