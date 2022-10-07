import { IHouse } from "interfaces";
import { formatPrice } from "utils/formats";
import {
  DiscountText,
  LocationHeader,
  LocationText,
  NameHeader,
  OptionsList,
  OptionsListItem,
  StyledHouseDetail,
  TypeText,
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
      <TypeText>For {type === "rent" ? "Rent" : "Sale"}</TypeText>
      {offer && <DiscountText>${regularPrice - discountedPrice} discount</DiscountText>}

      <OptionsList>
        <OptionsListItem>{bedrooms > 1 ? `${bedrooms} Bedrooms` : "1 Bedroom"}</OptionsListItem>
        <OptionsListItem>{bathrooms > 1 ? `${bathrooms} Bathrooms` : "1 Bathroom"}</OptionsListItem>
        <OptionsListItem>{parking && "Parking Spot"}</OptionsListItem>
        <OptionsListItem>{furnished && "Furnished"}</OptionsListItem>
      </OptionsList>

      <LocationHeader>Location</LocationHeader>

      {/* MAP */}
      {/* CONTACT LINK */}
    </StyledHouseDetail>
  );
};

export default HouseDetail;
