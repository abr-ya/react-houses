import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { topRight3sec } from "utils/toastOptions";
import { Container } from "components/Common.styled";
import UserForm from "components/UserForm/UserForm";

const SignIn = () => {
  const navigate = useNavigate();

  const formHandler = async ({ email, pass }) => {
    console.log("SignIn", email, pass);

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      if (userCredential.user) navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Wrong Login or Password!", topRight3sec);
    }
  };

  return (
    <Container>
      <h1>Sign In</h1>
      <UserForm formHandler={formHandler} buttonTitle="Sign In" />
      {/* Google OAuth */}
      <Link to="/sign-up" className="registerLink">
        Sign Up Instead
      </Link>
    </Container>
  );
};

export default SignIn;
