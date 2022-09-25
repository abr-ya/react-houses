import { useState, FormEvent } from "react";
import { ButtonBlock, ButtonText, InputBlock, StyledButton, StyledInput, StyledLabel } from "./UserForm.styled";

interface IRestoreForm {
  formHandler: (email: string) => void;
  buttonTitle: string;
  showName?: boolean;
}

const RestoreForm = ({ formHandler, buttonTitle }: IRestoreForm): JSX.Element => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    formHandler(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputBlock>
        <StyledLabel>Email Address</StyledLabel>
        <StyledInput onChange={(e) => setEmail(e.target.value)} type="email" icon="personIcon" />
      </InputBlock>
      <ButtonBlock>
        <ButtonText>{buttonTitle}</ButtonText>
        <StyledButton />
      </ButtonBlock>
    </form>
  );
};

export default RestoreForm;
