import styled, { css } from "styled-components/macro";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 85px;
  background-color: #ffffff;
  z-index: 1000;
`;

export const NavbarNav = styled.nav`
  width: 100%;
  margin-top: 0.75rem;
  overflow-y: hidden;
`;

export const NavbarList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavbarItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavbarTitle = styled.p<{ isActive: boolean }>`
  margin-top: 0.25rem;
  font-size: 14px;
  font-weight: 600;
  padding: 2px;

  ${({ isActive }) =>
    css`
      color: ${isActive ? "#2c2c2c" : "#8f8f8f"};
      background-color: ${isActive ? "#ccc" : "#fff"};
    `}
`;
