import { Container, GreenLink } from "components/Common.styled";
import RestoreForm from "components/UserForm/RestoreForm";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const formHandler = async (email: string) => {
    console.log("Reset Password:", email);
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };

  return (
    <Container>
      <h1>Forgot Password</h1>
      <RestoreForm formHandler={formHandler} buttonTitle="Send Reset Link" />
      <GreenLink to="/sign-in">Sign In</GreenLink>
    </Container>
  );
};

export default ForgotPassword;
