import { HouseSlider } from "components";
import { Container, Main, PageHeader, SectionHeader } from "../components/Common.styled";
import { CategoryImg, CategoryLink, CategoryNav, CategoryTitle } from "./Home.styled";

const Home = () => (
  <Container>
    <PageHeader>Explore</PageHeader>
    <Main>
      <SectionHeader>Last Houses</SectionHeader>
      <HouseSlider />
      <SectionHeader>Categories</SectionHeader>
      <CategoryNav>
        <CategoryLink to="/category/rent">
          <CategoryImg src="/img/rentCategoryImage.jpg" alt="rent" />
          <CategoryTitle>Places for rent</CategoryTitle>
        </CategoryLink>
        <CategoryLink to="/category/sale">
          <CategoryImg src="/img/sellCategoryImage.jpg" alt="sell" />
          <CategoryTitle>Places for sale</CategoryTitle>
        </CategoryLink>
      </CategoryNav>
    </Main>
  </Container>
);

export default Home;
