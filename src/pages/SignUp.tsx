import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../services/firebase";
import { topRight3sec } from "utils/toastOptions";
import { SocialLogin, UserForm } from "components";
import { Container, GreenLink, PageHeader } from "components/Common.styled";

const SignUp = () => {
  const navigate = useNavigate();

  const formHandler = async ({ name, email, pass }) => {
    console.log("SignUp", email, pass);

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const { user } = userCredential;
      console.log(`создали пользователя: ${user.uid}`);

      updateProfile(auth.currentUser, { displayName: name });

      const timestamp = serverTimestamp();
      const formDataCopy = { name, email, timestamp };
      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong with registration", topRight3sec);
    }
  };

  return (
    <Container>
      <PageHeader>Sign Up</PageHeader>
      <UserForm formHandler={formHandler} buttonTitle="Sign Up" showName />
      <SocialLogin text="Register with Google:" />
      <GreenLink to="/sign-in">Sign In Instead</GreenLink>
    </Container>
  );
};

export default SignUp;
