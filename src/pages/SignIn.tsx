import { Link } from "react-router-dom";
import { Container } from "components/Common.styled";
import UserForm from "components/UserForm/UserForm";

const SignIn = () => {
  const formHandler = ({ email, pass }) => {
    console.log(email, pass);
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
