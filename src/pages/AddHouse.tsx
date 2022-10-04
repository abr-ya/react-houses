import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HouseForm, Loader } from "components";
import { Container, Main, PageHeader } from "components/Common.styled";
import { IHouseFormData } from "components/HouseForm/HouseForm";
import { uploadFile } from "services/firestore";
import { db } from "services/firebase";

const AddHouse = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const geolocationEnabled = true;

  const createHandler = async (data: IHouseFormData) => {
    console.log(data);
    const { discountedPrice, regularPrice, images, latitude, longitude, address } = data;
    setLoading(true); // можно ставить после "быстрых проверок"

    if (Number(discountedPrice) >= Number(regularPrice)) {
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

      // а пока что заглушка - такая же, как и "выключенном состоянии"
      geolocation.lat = latitude;
      geolocation.lng = longitude;
      location = address;
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

    if (imgUrls) {
      const allData = {
        ...data,
        imgUrls,
        geolocation,
        location,
        timestamp: serverTimestamp(),
      };

      delete allData.images;
      delete allData.address;
      !allData.offer && delete allData.discountedPrice;

      console.log(`Сохраняем данные ${allData}`);
      const docRef = await addDoc(collection(db, "listings"), allData);

      setLoading(false);
      toast.success(`House saved with ID ${docRef.id}`);
      navigate(`/category/${allData.type}/${docRef.id}`);
    } else {
      console.log("Нет изображений - прерываю поток!");
    }
  };

  if (loading) return <Loader />;

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
