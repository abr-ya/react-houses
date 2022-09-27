import { SocialButton, SocialButtonImg, Wrapper } from "./SocialLogin.styled";

const SocialLogin = () => {
  const googleClickHandler = () => {
    console.log("googleClickHandler");
  };

  return (
    <Wrapper>
      <SocialButton onClick={googleClickHandler}>
        <SocialButtonImg src="icons/googleIcon.svg" alt="google" />
      </SocialButton>
    </Wrapper>
  );
};

export default SocialLogin;
