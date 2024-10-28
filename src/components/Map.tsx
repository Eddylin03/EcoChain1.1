import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, icon } from 'leaflet';

// Fix for default marker icon
const defaultIcon = icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const cattleLocations = [
  { position: [-23.5505, -46.6333] as [number, number], name: 'São Paulo Farm', cattle: 150 },
  { position: [-23.4446, -46.9255] as [number, number], name: 'Barueri Ranch', cattle: 75 },
  { position: [-23.6245, -46.5489] as [number, number], name: 'ABC Cattle Co.', cattle: 200 },
];

function Map() {
  return (
    <MapContainer
      center={[-23.5505, -46.6333]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cattleLocations.map((location, index) => (
        <Marker 
          key={index} 
          position={location.position} 
          icon={defaultIcon}
        >
          <Popup>
            <div className="font-semibold">{location.name}</div>
            <div>Cattle Count: {location.cattle}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;