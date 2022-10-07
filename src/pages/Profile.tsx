import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Container, GreenLink, Main, PageHeader, PageHeaderFlex, SmallButton } from "components/Common.styled";
import { UserProfile } from "components";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <Container>
      <PageHeaderFlex>
        <PageHeader>Profile</PageHeader>
        <SmallButton onClick={logoutHandler}>Logout</SmallButton>
      </PageHeaderFlex>

      <Main>
        <UserProfile />
        <GreenLink to="/add">Add House</GreenLink>
      </Main>
    </Container>
  );
};

export default Profile;
