import { IHouse } from "interfaces";
import { formatPrice, formatRooms } from "utils/formats";
import {
  BadgesBlock,
  DiscountBadge,
  LocationHeader,
  LocationText,
  NameHeader,
  OptionsList,
  OptionsListItem,
  StyledHouseDetail,
  TypeBadge,
} from "./HouseDetail.styled";

interface IHouseDetail {
  data: IHouse;
}

const HouseDetail = ({ data }: IHouseDetail) => {
  const { name, offer, discountedPrice, regularPrice, location, type, bedrooms, bathrooms, parking, furnished } = data;
  const price = formatPrice((offer ? discountedPrice : regularPrice).toString());

  return (
    <StyledHouseDetail>
      <NameHeader>{`${name} - $${price}`}</NameHeader>
      <LocationText>{location}</LocationText>
      <BadgesBlock>
        <TypeBadge>For {type === "rent" ? "Rent" : "Sale"}</TypeBadge>
        {offer && <DiscountBadge>${regularPrice - discountedPrice} discount</DiscountBadge>}
      </BadgesBlock>
      <OptionsList>
        <OptionsListItem>{formatRooms(bedrooms, "Bedroom")}</OptionsListItem>
        <OptionsListItem>{formatRooms(bathrooms, "Bathroom")}</OptionsListItem>
        <OptionsListItem>{parking && "Parking Spot"}</OptionsListItem>
        <OptionsListItem>{furnished && "Furnished"}</OptionsListItem>
      </OptionsList>

      <LocationHeader>Location</LocationHeader>
    </StyledHouseDetail>
  );
};

export default HouseDetail;
