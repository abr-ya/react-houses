import { useEffect, useState } from "react";
import { Container, GreenLink, Main, PageHeader } from "components/Common.styled";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "services/firebase";
import { HouseDetail, Loader, PinOnMapLeaflet } from "components";
import { IHouse } from "interfaces";

const House = () => {
  const [house, setHouse] = useState<IHouse | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const auth = getAuth();
  // используются для проверки, показывать ссылкуна контакт или нет
  console.log("house, user, house.uid:", auth.currentUser?.uid, house?.uid);

  useEffect(() => {
    const getHouse = async () => {
      const docRef = doc(db, "listings", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setHouse(docSnap.data() as IHouse);
        setLoading(false);
      }
    };

    getHouse();
  }, [id]);

  const renderMain = () => {
    if (loading) return <Loader />;

    return (
      <>
        <Container>
          <p>здесь будет слайдер</p>
          <HouseDetail data={house} />
        </Container>
        <PinOnMapLeaflet
          size={{ height: "400px", width: "100%" }}
          coord={house.geolocation}
          pinTitle={house.location}
        />
        {auth.currentUser?.uid !== house?.uid && (
          <GreenLink to={`/contact/${house.uid}?name=${house.name}`}>Contact Landlord</GreenLink>
        )}
      </>
    );
  };

  return (
    <>
      <PageHeader>House</PageHeader>
      <Main>{renderMain()}</Main>
    </>
  );
};

export default House;
