import { useState } from "react";
import { CreateButton, FileInput, ImagesComment, StyledLabel } from "./HouseForm.styled";
import "./tempForm.css";

export interface IHouseFormData {
  type: string;
  name: string;
  bedrooms: number;
  bathrooms: number;
  parking: boolean;
  furnished: boolean;
  address: string;
  offer: boolean;
  regularPrice: number;
  discountedPrice: number;
  images: FileList | null;
  latitude: number;
  longitude: number;
}

interface IHouseForm {
  submitHandler: (data: IHouseFormData) => void;
}

const HouseForm = ({ submitHandler }: IHouseForm) => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: null,
    latitude: 0,
    longitude: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountedPrice,
    latitude,
    longitude,
  } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(formData);
  };

  const formChangeHandler = (e) => {
    // Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    } else {
      const numFields = ["bedrooms", "bathrooms", "regularPrice", "discountedPrice", "latitude", "longitude"];
      const { id, value: rawValue } = e.target;
      const value = numFields.includes(id) ? Number(rawValue) : rawValue;

      let boolean = null;
      if (value === "true") boolean = true;
      if (value === "false") boolean = false;

      // Text/Booleans/Numbers
      setFormData((prev) => ({ ...prev, [id]: boolean ?? value }));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledLabel>Sell / Rent</StyledLabel>
      <div className="formButtons">
        <button
          type="button"
          className={type === "sale" ? "formButtonActive" : "formButton"}
          id="type"
          value="sale"
          onClick={formChangeHandler}
        >
          Sell
        </button>
        <button
          type="button"
          className={type === "rent" ? "formButtonActive" : "formButton"}
          id="type"
          value="rent"
          onClick={formChangeHandler}
        >
          Rent
        </button>
      </div>

      <StyledLabel>Name</StyledLabel>
      <input className="formInputName" type="text" id="name" value={name} onChange={formChangeHandler} required />

      <div className="formRooms flex">
        <div>
          <StyledLabel>Bedrooms</StyledLabel>
          <input
            className="formInputSmall"
            type="number"
            id="bedrooms"
            value={bedrooms}
            onChange={formChangeHandler}
            min="1"
            max="50"
            required
          />
        </div>
        <div>
          <StyledLabel>Bathrooms</StyledLabel>
          <input
            className="formInputSmall"
            type="number"
            id="bathrooms"
            value={bathrooms}
            onChange={formChangeHandler}
            min="1"
            max="50"
            required
          />
        </div>
      </div>

      <StyledLabel>Parking spot</StyledLabel>
      <div className="formButtons">
        <button
          className={parking ? "formButtonActive" : "formButton"}
          type="button"
          id="parking"
          value="true"
          onClick={formChangeHandler}
        >
          Yes
        </button>
        <button
          className={!parking && parking !== null ? "formButtonActive" : "formButton"}
          type="button"
          id="parking"
          value="false"
          onClick={formChangeHandler}
        >
          No
        </button>
      </div>

      <StyledLabel>Furnished</StyledLabel>
      <div className="formButtons">
        <button
          className={furnished ? "formButtonActive" : "formButton"}
          type="button"
          id="furnished"
          value="true"
          onClick={formChangeHandler}
        >
          Yes
        </button>
        <button
          className={!furnished && furnished !== null ? "formButtonActive" : "formButton"}
          type="button"
          id="furnished"
          value="false"
          onClick={formChangeHandler}
        >
          No
        </button>
      </div>

      <StyledLabel>Address</StyledLabel>
      <textarea className="formInputAddress" id="address" value={address} onChange={formChangeHandler} required />

      <div className="formLatLng flex">
        <div>
          <StyledLabel>Latitude</StyledLabel>
          <input
            className="formInputSmall"
            type="number"
            id="latitude"
            value={latitude}
            onChange={formChangeHandler}
            required
          />
        </div>
        <div>
          <StyledLabel>Longitude</StyledLabel>
          <input
            className="formInputSmall"
            type="number"
            id="longitude"
            value={longitude}
            onChange={formChangeHandler}
            required
          />
        </div>
      </div>

      <StyledLabel>Offer</StyledLabel>
      <div className="formButtons">
        <button
          className={offer ? "formButtonActive" : "formButton"}
          type="button"
          id="offer"
          value="true"
          onClick={formChangeHandler}
        >
          Yes
        </button>
        <button
          className={!offer && offer !== null ? "formButtonActive" : "formButton"}
          type="button"
          id="offer"
          value="false"
          onClick={formChangeHandler}
        >
          No
        </button>
      </div>

      <StyledLabel>Regular Price</StyledLabel>
      <div className="formPriceDiv">
        <input
          className="formInputSmall"
          type="number"
          id="regularPrice"
          value={regularPrice}
          onChange={formChangeHandler}
          min="50"
          max="750000000"
          required
        />
        {type === "rent" && <p className="formPriceText">$ / Month</p>}
      </div>

      {offer && (
        <>
          <StyledLabel>Discounted Price</StyledLabel>
          <input
            className="formInputSmall"
            type="number"
            id="discountedPrice"
            value={discountedPrice}
            onChange={formChangeHandler}
            min="50"
            max="750000000"
            required={offer}
          />
        </>
      )}

      <StyledLabel>Images</StyledLabel>
      <ImagesComment>The first image will be the cover (max 6).</ImagesComment>
      <FileInput type="file" id="images" onChange={formChangeHandler} max="6" accept=".jpg,.png,.jpeg" multiple />
      <CreateButton type="submit">Create House</CreateButton>
    </form>
  );
};

export default HouseForm;
