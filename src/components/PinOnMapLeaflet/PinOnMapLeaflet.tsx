import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { ICoord } from "interfaces";

interface IPinOnMapLeaflet {
  size: { height: string; width: string };
  coord: ICoord;
  pinTitle: string;
}

const PinOnMapLeaflet = ({ size, coord, pinTitle }: IPinOnMapLeaflet) => (
  <MapContainer style={size} center={[coord.lat, coord.long]} zoom={13}>
    <TileLayer
      attribution='&copy;<a href="http://osm.org/copyright">OpenStreetMap</a>'
      url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
    />
    <Marker position={[coord.lat, coord.long]}>
      <Popup>{pinTitle}</Popup>
    </Marker>
  </MapContainer>
);

export default PinOnMapLeaflet;
