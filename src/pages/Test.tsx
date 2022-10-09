import { PinOnMapLeaflet } from "components";

const Test = () => {
  const size = { height: "calc(100vh - 125px)", width: "100%" };
  const coord = { lat: 51.505, long: 0 };

  return (
    <>
      <h1>Test</h1>
      <PinOnMapLeaflet size={size} coord={coord} pinTitle={"Название пина!"} />
    </>
  );
};

export default Test;
