import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "services/firebase";
import { toast } from "react-toastify";
import { SocialButton, SocialButtonImg, Wrapper } from "./SocialLogin.styled";

interface ISocialLogin {
  text?: string;
}

const SocialLogin = ({ text }: ISocialLogin) => {
  const navigate = useNavigate();

  const googleClickHandler = async () => {
    console.log("googleClickHandler");
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      // If user, doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Could not Login/Register with Google");
    }
  };

  return (
    <Wrapper>
      {text && <h4>{text}</h4>}
      <SocialButton onClick={googleClickHandler}>
        <SocialButtonImg src="icons/googleIcon.svg" alt="google" />
      </SocialButton>
    </Wrapper>
  );
};

export default SocialLogin;
