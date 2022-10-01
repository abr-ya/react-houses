import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const StyledHouseCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  position: relative;
`;

export const DetailLink = styled(Link)`
  display: contents;
`;

export const HouseImg = styled.img`
  width: 30%;
  height: 100px;
  border-radius: 1.5rem;
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 19%;
    height: 217px;
  }
`;

export const HouseInfo = styled.div`
  width: 65%;

  @media (min-width: 1024px) {
    width: 79%;
  }
`;

export const TextLocation = styled.p`
  font-weight: 600;
  font-size: 0.7rem;
  opacity: 0.8;
  margin-bottom: 0;
`;

export const TextName = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  margin: 0;
`;

export const TextPrice = styled.p`
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: #00cc66;
  margin-bottom: 0;
  display: flex;
  align-items: center;
`;

export const RoomsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 275px;
`;

export const RoomsText = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.7rem;
`;

export const IconsCorner = styled.div`
  position: absolute;
  top: -3%;
  right: -2%;

  & > svg {
    cursor: pointer;
  }
`;
