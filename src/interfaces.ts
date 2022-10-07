import { FieldValue } from "firebase/firestore";

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface ICoord {
  lat: number;
  long: number;
}

export interface IHouse {
  bathrooms: number;
  bedrooms: number;
  discountedPrice: number;
  furnished: boolean;
  geolocation: ICoord;
  imageUrls: string[];
  location: number;
  name: number;
  offer: boolean;
  parking: boolean;
  regularPrice: number;
  timestamp: FieldValue;
  type: string;
  userRef: string;
}
