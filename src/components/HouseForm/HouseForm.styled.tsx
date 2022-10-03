import styled from "styled-components/macro";

export const StyledLabel = styled.label`
  font-weight: 600;
  margin-top: 1rem;
  display: block;
`;

export const ImagesComment = styled.p`
  font-size: 0.9rem;
  opacity: 0.75;
`;

export const FileInput = styled.input`
  width: 100%;
  cursor: pointer;

  &::-webkit-file-upload-button {
    cursor: pointer;
    background-color: #00cc66;
    border: none;
    color: #ffffff;
    font-weight: 600;
    padding: 0.5rem 0.75rem;
    border-radius: 1rem;
    margin: 1rem;
  }
`;

export const CreateButton = styled.button`
  cursor: pointer;
  background: #00cc66;
  border-radius: 1rem;
  padding: 0.85rem 2rem;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.25rem;
  width: 80%;
  margin: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
