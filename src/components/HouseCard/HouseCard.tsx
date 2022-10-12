import {
  DetailLink,
  HouseImg,
  HouseInfo,
  IconsCorner,
  RoomsBlock,
  RoomsText,
  StyledHouseCard,
  TextLocation,
  TextName,
  TextPrice,
} from "./HouseCard.styled";
import DeleteIcon from "assets/svg/deleteIcon.svg";
import { formatPrice, formatRooms } from "utils/formats";

interface IHouseCard {
  house: any;
  id: string;
  onDelete: () => void;
}

const HouseCard = ({ house, id, onDelete }: IHouseCard) => {
  const renderPrice = () => `$ ${formatPrice(
    house.offer ? house.discountedPrice.toString() : house.regularPrice.toString(),
  )}
  ${house.type === "rent" ? " / Month" : ""}`;

  const renderIcons = () => {
    if (onDelete) return <DeleteIcon className="removeIcon" fill="rgb(231, 76,60)" onClick={onDelete} />;

    return null;
  };

  const renderImg = () => {
    if (!house?.imageUrls || !Array.isArray(house.imageUrls)) return <span>нет изображения</span>;

    return <HouseImg src={house.imageUrls[0]} alt={house.name} />;
  };

  return (
    <StyledHouseCard>
      <DetailLink to={`/category/${house?.type}/${id}`}>
        {renderImg()}
        <HouseInfo>
          <TextLocation>{house.location}</TextLocation>
          <TextName>{house.name}</TextName>
          <TextPrice>{renderPrice()}</TextPrice>
          <RoomsBlock>
            <img src="/icons/bedIcon.svg" alt="bed" />
            <RoomsText>{formatRooms(house.bedrooms, "Bedroom")}</RoomsText>
            <img src="/icons/bathtubIcon.svg" alt="bath" />
            <RoomsText>{formatRooms(house.bathrooms, "Bathroom")}</RoomsText>
          </RoomsBlock>
        </HouseInfo>
      </DetailLink>
      <IconsCorner>{renderIcons()}</IconsCorner>
    </StyledHouseCard>
  );
};

export default HouseCard;
