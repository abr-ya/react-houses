import { useState } from "react";
import { toast } from "react-toastify";
import { HouseForm } from "components";
import { Container, Main, PageHeader } from "components/Common.styled";
import { IHouseFormData } from "components/HouseForm/HouseForm";
import { uploadFile } from "services/firestore";

const AddHouse = () => {
  const [loading, setLoading] = useState(false);
  const geolocationEnabled = true;

  const createHandler = async (data: IHouseFormData) => {
    console.log(data);
    const { discountedPrice, regularPrice, images, latitude, longitude, address } = data;
    setLoading(true);

    if (discountedPrice >= regularPrice) {
      setLoading(false);
      toast.error("Discounted price needs to be less than regular price");
      return;
    }
    if (images && images.length > 6) {
      setLoading(false);
      toast.error("Max 6 images");
      return;
    }
    const geolocation = {
      lat: 0,
      lng: 0,
    };
    let location;
    if (geolocationEnabled) {
      console.log(`Здесь когда-нибудь будет геокодинг с использованием адреса: ${address}`);
    } else {
      geolocation.lat = latitude;
      geolocation.lng = longitude;
      location = address;
    }

    const imgUrls = await Promise.all([...images].map((image) => uploadFile(image))).catch(() => {
      setLoading(false);
      toast.error("Images not uploaded");
      return;
    });

    console.log(imgUrls);

    setLoading(false);
  };

  return (
    <Container>
      <PageHeader>AddHouse</PageHeader>
      <Main>
        <HouseForm submitHandler={createHandler} />
      </Main>
    </Container>
  );
};

export default AddHouse;
