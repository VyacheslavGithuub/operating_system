import styled from "styled-components";

const TimeSC = styled.time`
  user-select: none;
  color: #d2dae2;
  font-size: 100px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 80%;
  @media (max-width: 1024px) {
    font-size: 90px;
  }
  @media (max-width: 800px) {
    color: #24414b;
    font-size: 80px;
  }
  @media (max-width: 600px) {
    font-size: 4em;
  }
  @media (max-width: 400px) {
    font-size: 3em;
  }
`;

export const useTimeUIStyle = () => ({
  TimeSC,
});
