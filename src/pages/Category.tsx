import { useEffect, useState } from "react";
import { Container, Main, PageHeader } from "components/Common.styled";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "../services/firebase";
import { toast } from "react-toastify";
import Loader from "components/Loader/Loader";

const Category = () => {
  const [houses, setHouses] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const { categoryName: category } = params;

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, "listings");

        // Create a query (filter!)
        const q = query(listingsRef, where("type", "==", params.categoryName), orderBy("timestamp", "desc"), limit(10));

        // Execute query and create houses array
        const houses = [];
        const querySnap = await getDocs(q);
        querySnap.forEach((doc) => houses.push({ id: doc.id, data: doc.data() }));

        setHouses(houses);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch houses");
      }
    };

    fetchListings();
  }, [params.categoryName]);

  const renderMain = () => {
    if (loading) return <Loader />;
    if (!houses?.length) return <p>category is empty</p>;

    return <p>Дома!</p>;
  };

  return (
    <Container>
      <PageHeader>{`Places for ${category}`}</PageHeader>
      <Main>{renderMain()}</Main>
    </Container>
  );
};

export default Category;
