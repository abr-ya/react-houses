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

export const Container = styled.div`
  margin: 2rem;
  padding: 0;

  @media (min-width: 1024px) {
    margin: 3rem;
  }
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
