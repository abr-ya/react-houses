import { useEffect, useState } from "react";
import { Container, Main, PageHeader } from "components/Common.styled";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "services/firebase";
import { HouseDetail, Loader } from "components";

const House = () => {
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getHouse = async () => {
      const docRef = doc(db, "listings", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setHouse(docSnap.data());
        setLoading(false);
      }
    };

    getHouse();
  }, [id]);

  const renderMain = () => {
    if (loading) return <Loader />;

    return (
      <>
        <p>здесь будет слайдер</p>
        <HouseDetail data={house} />
      </>
    );
  };

  return (
    <Container>
      <PageHeader>House</PageHeader>
      <Main>{renderMain()}</Main>
    </Container>
  );
};

export default House;
