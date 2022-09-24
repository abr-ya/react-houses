import { Link } from "react-router-dom";
import { Container } from "components/Common.styled";
import UserForm from "components/UserForm/UserForm";

const SignUp = () => {
  const formHandler = (email: string, pass: string) => {
    console.log(email, pass);
  };

  return (
    <Container>
      <h1>Sign Up</h1>
      <UserForm formHandler={formHandler} buttonTitle="Sign Up" showName />
      {/* Google OAuth */}
      <Link to="/sign-in" className="registerLink">
        Sign In Instead
      </Link>
    </Container>
  );
};

export default SignUp;
