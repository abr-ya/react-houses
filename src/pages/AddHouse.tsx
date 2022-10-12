import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HouseForm, Loader } from "components";
import { Container, Main, PageHeader } from "components/Common.styled";
import { IHouseFormData } from "components/HouseForm/HouseForm";
import { uploadFile } from "services/firestore";
import { db } from "services/firebase";
import { ICoord } from "interfaces";
import { getAuth } from "firebase/auth";

const AddHouse = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [loading, setLoading] = useState(false);
  const geolocationEnabled = true;
  const userRef = auth.currentUser?.uid;

  const createHandler = async (data: IHouseFormData) => {
    const { discountedPrice, regularPrice, images, latitude, longitude, address } = data;

    // быстрые проверки
    if (discountedPrice >= regularPrice) {
      toast.error("Discounted price needs to be less than regular price");
      return;
    }
    if (images && images.length > 6) {
      toast.error("Max 6 images");
      return;
    }

    // Start Async Prepare Data
    setLoading(true);
    const geolocation: ICoord = {
      lat: 0,
      long: 0,
    };
    let location;
    if (geolocationEnabled) {
      console.log(`Здесь возможно будет геокодинг с использованием адреса: ${address}`);

      // а пока что заглушка - такая же, как и "выключенном состоянии"
      geolocation.lat = latitude;
      geolocation.long = longitude;
      location = address;
    } else {
      geolocation.lat = latitude;
      geolocation.long = longitude;
      location = address;
    }

    // Check and load images
    let imageUrls = null;
    if (images) {
      imageUrls = await Promise.all([...images].map((image) => uploadFile(image))).catch((err) => {
        setLoading(false);
        console.log("Images uploaded error: ", err);
        toast.error("Images uploaded error!");
        return;
      });
    }

    // Send data to firebase
    const allData = {
      ...data,
      userRef,
      imageUrls,
      geolocation,
      location,
      timestamp: serverTimestamp(),
    };

    delete allData.address;
    delete allData.images;
    if (!imageUrls) delete allData.imageUrls;
    if (!allData.offer) delete allData.discountedPrice;

    console.log(`Сохраняем данные ${allData}`);
    // How about Error Message?
    const docRef = await addDoc(collection(db, "listings"), allData);

    setLoading(false);
    toast.success(`House saved with ID ${docRef.id}`);
    navigate(`/category/${allData.type}/${docRef.id}`);
  };

  if (loading) return <Loader />;

  return (
    <Container>
      <PageHeader>Add House</PageHeader>
      <Main>
        <HouseForm submitHandler={createHandler} />
      </Main>
    </Container>
  );
};

export default AddHouse;
