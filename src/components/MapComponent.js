import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [-7.51066830389205, 111.00475985247675];

const MapComponent = () => {
  return (
    <MapContainer center={position} zoom={13} style={{ height: "200px", width: "100%"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Sragen, Jawa Tengah, Indonesia. <br /> A beautiful place!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
