import React ,{useMemo} from 'react'
import { useLoadScript,GoogleMap ,Marker } from '@react-google-maps/api'
export default function About() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <div style={{width:'80vw',height:"90vh",margin:"10px"}}>
    {!isLoaded ? (
      <h1>Loading...</h1>
    ) : (
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={10}
      >
      <Marker
  position={{ lat: 18.52043, lng: 73.856743 }}
  icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
/>
      </GoogleMap>
    )}
  </div>
  )
}
