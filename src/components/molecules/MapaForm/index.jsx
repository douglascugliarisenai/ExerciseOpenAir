/* eslint-disable */
import { Grid } from "@mui/material";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { Fragment } from "react";

function MapaForm(latitude, longitude) {
 const mapConfig = {
  lat: -27.5633,
  lng: -48.64265,
  zoom: 6
 };

 //  lat: -27.5633,
 //  lng: -48.64265,
 return (
  <Grid className="containerMapa">
   <MapContainer
    center={[mapConfig.lat, mapConfig.lng]}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[mapConfig.lat, mapConfig.lng]}>
     <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
     </Popup>
    </Marker>
   </MapContainer>
   ,
  </Grid>
 );
}

export default MapaForm;
