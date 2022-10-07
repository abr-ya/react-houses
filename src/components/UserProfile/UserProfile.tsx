import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "services/firebase";
import { toast } from "react-toastify";
import { ProfileForm, ProfileHeaderText, ProfileTitle } from "./UserProfile.styled";
import { SmallButton } from "components/Common.styled";
import "./temp.css";

const UserProfile = () => {
  const auth = getAuth();
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const titleClickHandler = () => {
    isEdit && onSubmit();
    setIsEdit((prevState) => !prevState);
  };

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
    <>
      <ProfileTitle>
        <ProfileHeaderText>Personal Details</ProfileHeaderText>
        <SmallButton onClick={titleClickHandler}>{isEdit ? "save" : "change"}</SmallButton>
      </ProfileTitle>
      <ProfileForm>
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
      </ProfileForm>
    </>
  );
};

export default UserProfile;
