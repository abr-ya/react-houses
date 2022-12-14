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
    value: string | boolean;
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

  const protectedList = ["84E5bi5O3ETRt5tnWiVg", "dIBr72cXA0WYPHaUzFrQ"];
  const deleteHandler = (id) => {
    if (protectedList.includes(id)) {
      toast.error("House is in Protected List");
    } else {
      console.log("Delete!", id);
      toast.info(`Delete function for ${id} will be there soon!`);
    }
  };

  if (loading) return <Loader />;

  if (!houses?.length) return <p>{title} is empty</p>;

  return (
    <ul>
      {houses.map((item) => (
        <HouseCard house={item.data} id={item.id} key={item.id} onDelete={() => deleteHandler(item.id)} />
      ))}
    </ul>
  );
};

export default HouseList;
