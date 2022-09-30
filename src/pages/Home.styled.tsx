import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const CategoryBlockTitle = styled.div`
  font-weight: 700;
  margin: 1rem 0;
`;

export const CategoryNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CategoryLink = styled(Link)`
  width: 48%;
`;

export const CategoryTitle = styled.h2`
  font-weight: 500;
  text-align: left;
`;

export const CategoryImg = styled.img`
  min-height: 115px;
  height: 15vw;
  width: 100%;
  border-radius: 1.5rem;
  object-fit: cover;
  margin: 0 auto;
`;
