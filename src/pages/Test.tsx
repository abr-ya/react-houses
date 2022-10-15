import { PinOnMapLeaflet, SortingList } from "components";
import { useState } from "react";

const Test = () => {
  const size = { height: "200px", width: "100%" };
  const coord = { lat: 51.505, long: 0 };

  const [images, setImages] = useState([
    "https://firebasestorage.googleapis.com/v0/b/react-houses-5b09a.appspot.com/o/images%2Fnew_20221014_070018_undefined?alt=media&token=1a9c0719-3fb3-4ec6-8008-7bbbef769629",
    "https://firebasestorage.googleapis.com/v0/b/react-houses-5b09a.appspot.com/o/images%2Fnew_20221014_070017_04.jpg?alt=media&token=32fdbccb-ae18-42c0-8a91-6f2434734514",
    "https://firebasestorage.googleapis.com/v0/b/react-houses-5b09a.appspot.com/o/images%2Fnew_20221014_070017_undefined?alt=media&token=50b36685-ae2c-466a-8f49-6c332a3658b3",
  ]);

  return (
    <>
      <h1>Test</h1>
      <h2>Drag-n-Drop</h2>
      <SortingList list={images} saver={setImages} />
      <h2>PinOnMapLeaflet</h2>
      <PinOnMapLeaflet size={size} coord={coord} pinTitle={"Название пина!"} />
    </>
  );
};

export default Test;
