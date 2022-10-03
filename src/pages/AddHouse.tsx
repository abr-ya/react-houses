import { HouseForm } from "components";
import { Container, Main, PageHeader } from "components/Common.styled";
import { IHouseFormData } from "components/HouseForm/HouseForm";

const createHandler = (data: IHouseFormData) => {
  console.log(data);
};

const AddHouse = () => {
  return (
    <Container>
      <PageHeader>AddHouse</PageHeader>
      <Main>
        <HouseForm submitHandler={createHandler} />
      </Main>
    </Container>
  );
};

export default AddHouse;
