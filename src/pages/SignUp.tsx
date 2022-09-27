import { useNavigate } from "react-router-dom";
import UserForm from "components/UserForm/UserForm";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { toast } from "react-toastify";
import { topRight3sec } from "utils/toastOptions";
import { Container, GreenLink } from "components/Common.styled";
import { SocialLogin } from "components";

const SignUp = () => {
  const navigate = useNavigate();

  const formHandler = async ({ name, email, pass }) => {
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
      <h1>Sign Up</h1>
      <UserForm formHandler={formHandler} buttonTitle="Sign Up" showName />
      <SocialLogin />
      <GreenLink to="/sign-in">Sign In Instead</GreenLink>
    </Container>
  );
};

export default SignUp;
