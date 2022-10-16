import styled from "styled-components/macro";

export const SliderWrapper = styled.div`
  position: relative;
`;

export const ControlBlock = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  & > button {
    margin-bottom: 5px;
  }
`;
