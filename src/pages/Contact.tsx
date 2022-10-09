import { Container, Main, PageHeader } from "components/Common.styled";
import { useParams, useSearchParams } from "react-router-dom";

const Contact = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  return (
    <Container>
      <PageHeader>Contact</PageHeader>
      <Main>{`Contact user ${id} about "${name}"`}</Main>
    </Container>
  );
};

export default Contact;
