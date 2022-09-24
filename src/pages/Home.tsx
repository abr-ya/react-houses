import { Container } from "../components/Common.styled";

const Home = () => {
  return (
    <Container>
      <h1>Hello, Styled React 2022-09!</h1>
      <h2>ENV test: {process.env.TEST}</h2>
    </Container>
  );
};

export default Home;
