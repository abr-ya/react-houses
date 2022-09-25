import { Container } from "components/Common.styled";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return (
    <Container>
      <h1>Profile</h1>
      {user ? <p>Hello, {user.displayName}</p> : "Not Logged In"}
    </Container>
  );
};

export default Profile;
