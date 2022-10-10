import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "services/firebase";
import { toast } from "react-toastify";
import { Loader, SliderSwiper6Data } from "components";

const HouseSlider = () => {
  const [houses, setHouses] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, "listings");

        // Create a query - отличие от листа только здесь !!! todo - нет where и limit 5
        const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));

        // Execute query and create houses array
        const houses = [];
        const querySnap = await getDocs(q);
        querySnap.forEach((doc) => houses.push({ id: doc.id, data: doc.data() }));

        console.log(houses);
        setHouses(houses);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch houses for slider");
      }
    };

    fetchHouses();
  }, []);

  if (loading)
    return (
      <div style={{ height: "400px" }}>
        <Loader />
      </div>
    );

  return <SliderSwiper6Data dataArray={houses} height={400} />;
};

export default HouseSlider;
