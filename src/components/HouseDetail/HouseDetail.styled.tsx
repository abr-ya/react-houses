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

export const BadgesBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0.5rem 0;
`;

export const TypeBadge = styled.div`
  padding: 0.25rem 0.5rem;
  background-color: #00cc66;
  color: #ffffff;
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 1rem;
`;

export const DiscountBadge = styled.div`
  padding: 0.25rem 0.5rem;
  background-color: #000000;
  color: #ffffff;
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 600;
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
