import styled from "styled-components/macro";

export const StyledHouseDetail = styled.div`
  margin: 1rem 0;

  @media (min-width: 1024px) {
    margin: 3rem 0;
  }
`;

export const NameHeader = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const LocationText = styled.p`
  margin-top: 0;
  font-weight: 600;
`;

export const TypeText = styled.p`
  padding: 0.25rem 0.5rem;
  background-color: #00cc66;
  color: #ffffff;
  border-radius: 2rem;
  display: inline;
  font-weight: 600;
  font-size: 0.8rem;
  margin-right: 1rem;
`;

export const DiscountText = styled.p`
  padding: 0.25rem 0.5rem;
  background-color: #000000;
  color: #ffffff;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline;
`;

export const OptionsList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const OptionsListItem = styled.li`
  margin: 0.3rem 0;
  font-weight: 500;
  opacity: 0.8;
`;

export const LocationHeader = styled.h3`
  margin-top: 2rem;
  font-weight: 600;
  font-size: 1.25rem;
`;
