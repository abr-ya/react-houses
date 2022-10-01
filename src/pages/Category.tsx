import { Container, Main, PageHeader } from "components/Common.styled";
import { useParams } from "react-router-dom";
import { HouseList } from "components/";
import { WhereFilterOp } from "firebase/firestore";

const Category = () => {
  const params = useParams();
  const { categoryName: category } = params;

  const whereArgs = {
    field: "type",
    opt: "==" as WhereFilterOp,
    value: category,
  };

  return (
    <Container>
      <PageHeader>{`Places for ${category}`}</PageHeader>
      <Main>
        <HouseList title={"category"} whereArgs={whereArgs} />
      </Main>
    </Container>
  );
};

export default Category;
