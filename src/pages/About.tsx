import { Container, Card, AboutList } from "../components/Common.styled";

const About = () => (
  <Container>
    <Card>
      <h1>About page</h1>
      <p>Приложение - `&quot;`витрина`&quot;` домов...</p>

      <AboutList>
        В приложении использованы (основное):
        <li>React</li>
        <li>Webpack 5</li>
        <li>TypeScript</li>
        <li>стилизация: Styled Components</li>
        <li>маршрутизация: React Router 6</li>
        <li>авторизация: Google OAuth, Mail (Firebase)</li>
        <li>запросы на сервер: Axios (?)</li>
        <li>хранилище: ???</li>
        <li>иконки: SVG-files</li>
        <li>уведомления: React Toastify (?)</li>
      </AboutList>
    </Card>
  </Container>
);

export default About;
