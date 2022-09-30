import { Container, Main, PageHeader } from "components/Common.styled";
import { useParams } from "react-router-dom";

const Category = () => {
  const params = useParams();
  console.log(params);

  return (
    <Container>
      <PageHeader>Category</PageHeader>
      <Main></Main>
    </Container>
  );
};

export default Category;
