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
`;

export default GlobalStyle;

export const Container = styled.div`
  max-width: 768px;
  margin: 20px auto;
  padding: 0 20px;
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
