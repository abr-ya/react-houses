import { Container, Main, PageHeader } from "components/Common.styled";
import { HouseList } from "components/";
import { WhereFilterOp } from "firebase/firestore";

const Offers = () => {
  const whereArgs = {
    field: "offer",
    opt: "==" as WhereFilterOp,
    value: true,
  };

  return (
    <Container>
      <PageHeader>Offers</PageHeader>
      <Main>
        <HouseList title={"offers"} whereArgs={whereArgs} />
      </Main>
    </Container>
  );
};

export default Offers;
