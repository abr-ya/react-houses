import styled from "styled-components/macro";

export const SliderItem = styled.div<{ height: number; bg: string; isLink?: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height}px;
  background: url(${({ bg }) => bg}) center no-repeat;
  background-size: "cover";
  cursor: ${({ isLink }) => (isLink ? "pointer" : "all-scroll")};
`;

export const SlideTitle = styled.p`
  color: #ffffff;
  position: absolute;
  top: 70px;
  left: 0;
  font-weight: 600;
  max-width: 90%;
  font-size: 1.25rem;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0.5rem;

  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;

export const SlidePrice = styled.p`
  color: #000000;
  position: absolute;
  top: 120px;
  left: 11px;
  font-weight: 600;
  max-width: 90%;
  background-color: #ffffff;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;
