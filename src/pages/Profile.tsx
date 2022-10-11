import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  Container,
  GreenLink,
  Main,
  PageHeader,
  PageHeaderFlex,
  SectionHeader,
  SmallButton,
} from "components/Common.styled";
import { HouseList, UserProfile } from "components";
import { WhereFilterOp } from "firebase/firestore";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    auth.signOut();
    navigate("/");
  };

  const whereArgs = {
    field: "userRef",
    opt: "==" as WhereFilterOp,
    value: auth.currentUser.uid,
  };

  return (
    <>
      <PageHeaderFlex>
        <PageHeader>Profile</PageHeader>
        <SmallButton onClick={logoutHandler}>Logout</SmallButton>
      </PageHeaderFlex>
      <Main>
        <Container>
          <UserProfile />
          <GreenLink to="/add">Add House</GreenLink>
          <SectionHeader>My listings</SectionHeader>
          <HouseList title={"my listings"} whereArgs={whereArgs} />
        </Container>
      </Main>
    </>
  );
};

export default Profile;
