import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const SocialButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  margin: 1rem;
  width: 3rem;
  height: 3rem;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
`;

export const SocialButtonImg = styled.img`
  width: 100%;
`;
