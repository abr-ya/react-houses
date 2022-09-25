import styled, { css } from "styled-components/macro";

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const StyledInput = styled.input<{ icon?: string }>`
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  border: none;
  background: #fff;
  border-radius: 3rem;
  height: 3rem;
  width: 100%;
  outline: none;
  font-family: "Montserrat", sans-serif;
  padding: 0 3rem;
  font-size: 1rem;

  ${({ icon }) =>
    icon &&
    css`
      background: url("./icons/${icon}.svg") #ffffff 2.5% center no-repeat;
    `}
`;

export const StyledLabel = styled.label`
  padding: 12px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  position: inherit;

  @media (min-width: 1024px) {
    justify-content: start;
  }
`;

export const ButtonText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 20px;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: #00cc66;
  border-radius: 50%;
  background: url("./icons/arrowRightIcon.svg") #00cc66 center no-repeat;
`;
