import { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy, limit, WhereFilterOp } from "firebase/firestore";
import { db } from "services/firebase";
import { toast } from "react-toastify";
import { HouseCard, Loader } from "components/";

interface IHouseList {
  title: string;
  whereArgs: {
    field: string;
    opt: WhereFilterOp;
    value: string;
  };
}

const HouseList = ({ title, whereArgs: { field, opt, value } }: IHouseList) => {
  const [houses, setHouses] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, "listings");

        // Create a query
        const q = query(listingsRef, where(field, opt, value), orderBy("timestamp", "desc"), limit(10));

        // Execute query and create houses array
        const houses = [];
        const querySnap = await getDocs(q);
        querySnap.forEach((doc) => houses.push({ id: doc.id, data: doc.data() }));

        console.log(houses);
        setHouses(houses);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch houses");
      }
    };

    fetchHouses();
  }, []);

  if (loading) return <Loader />;

  if (!houses?.length) return <p>{title} is empty</p>;

  return (
    <ul>
      {houses.map((item) => (
        <HouseCard house={item.data} id={item.id} key={item.id} onDelete={() => console.log("Del!")} />
      ))}
    </ul>
  );
};

export default HouseList;
