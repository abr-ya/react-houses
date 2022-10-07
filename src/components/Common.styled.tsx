import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f2f4f8;
    margin: 0;
    box-sizing: border-box;
  }

  html::-webkit-scrollbar {
    display: none;
  }

  a {
    text-decoration: none;
    display: block;
    color: #000000;
  }

  button {
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: 2rem;
  padding: 0;
  height: calc(100vh - 115px);
  overflow: auto;

  @media (min-width: 1024px) {
    margin: 3rem;
  }
`;

export const PageHeaderFlex = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageHeader = styled.h1`
  font-size: 2rem;
  font-weight: 800;
`;

export const SmallButton = styled.button`
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #00cc66;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
`;

export const Card = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 15px;
  padding: 25px 50px;
  margin: 20px 0;
  position: relative;
`;

export const Old = styled.p`
  text-decoration: line-through;
`;

export const AboutList = styled.ul`
  margin-top: 20px;
`;

export const GreenLink = styled(Link)`
  margin-top: 2rem;
  color: #00cc66;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
`;
