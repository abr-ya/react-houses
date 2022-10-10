import styled from "styled-components/macro";

export const SliderItem = styled.div<{ height: number; bg: string }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height}px;
  background: url(${({ bg }) => bg}) center no-repeat;
  background-size: "cover";
`;
