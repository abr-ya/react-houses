import { useState, FormEvent } from "react";
import { ButtonBlock, ButtonText, InputBlock, StyledButton, StyledInput, StyledLabel } from "./UserForm.styled";

interface IUserForm {
  formHandler: (email: string, pass: string) => void;
  buttonTitle: string;
  showName?: boolean;
}

const UserForm = ({ formHandler, buttonTitle, showName }: IUserForm): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    formHandler(email, pass);
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      {showName && (
        <InputBlock>
          <StyledLabel>Name</StyledLabel>
          <StyledInput onChange={(e) => setName(e.target.value)} type="text" icon="badgeIcon" />
        </InputBlock>
      )}
      <InputBlock>
        <StyledLabel>Email Address</StyledLabel>
        <StyledInput onChange={(e) => setEmail(e.target.value)} type="email" icon="personIcon" />
      </InputBlock>
      <InputBlock>
        <StyledLabel>Password</StyledLabel>
        <StyledInput onChange={(e) => setPass(e.target.value)} type="password" icon="lockIcon" />
      </InputBlock>
      <ButtonBlock>
        <ButtonText>{buttonTitle}</ButtonText>
        <StyledButton />
      </ButtonBlock>
    </form>
  );
};

export default UserForm;
