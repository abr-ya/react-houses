import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, GreenLink } from "components/Common.styled";
import { LogoutButton, ProfileHeader } from "./Profile.styled";
import "./temp/profile.css";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  // здесь ли ??
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const logoutHandler = () => {
    auth.signOut();
    navigate("/");
  };

  // часть может уйти в форму
  const onSubmit = async () => {
    if (auth.currentUser.email !== email) {
      console.log("Изменение e-mail не обрабатывается. И непонятно: нужно ли?");
    }
    try {
      if (auth.currentUser.displayName !== name) {
        // Update display name in fb
        await updateProfile(auth.currentUser, { displayName: name });

        // Update in firestore
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, { name });
      }
    } catch (error) {
      console.log(error);
      toast.error("Could not update profile details");
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <Container>
      <ProfileHeader>
        <h1>Profile</h1>
        <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
      </ProfileHeader>

      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              isEdit && onSubmit();
              setIsEdit((prevState) => !prevState);
            }}
          >
            {isEdit ? "save" : "change"}
          </p>
        </div>
        <div className="profileCard">
          <form>
            <input
              type="text"
              id="name"
              className={!isEdit ? "profileName" : "profileNameActive"}
              disabled={!isEdit}
              value={name}
              onChange={onChange}
            />
            <input
              type="text"
              id="email"
              className={!isEdit ? "profileEmail" : "profileEmailActive"}
              disabled={!isEdit}
              value={email}
              onChange={onChange}
            />
          </form>
        </div>
        <GreenLink to="/add">Add House</GreenLink>
      </main>
    </Container>
  );
};

export default Profile;
