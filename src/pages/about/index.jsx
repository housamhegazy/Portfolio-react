// import React, { useMemo } from "react";
// import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { Box, useTheme } from "@mui/material";
import { Helmet } from "react-helmet";
export default function About() {
  const theme = useTheme();
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  // });
  //  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  return (
    <Box
      sx={{
        p: "20px",
        background: theme.palette.primary.main,
        width: { xs: "90%", md: "70%" },
        mx: "auto",
        borderRadius: "10px",
        marginTop: "30px",
      }}
    >
      <Helmet>
        <title>H.Hegazy/About</title>
        <meta name="description" content="about page" />
      </Helmet>
      <ul style={{ listStyle: "none" }}>
        <li style={{ marginTop: "15px", color: "white" }}>
          <span style={{ color: "yellow" }}>2015</span>
          {" - "} Graduated from Faculity of Science
        </li>
        <li style={{ marginTop: "15px", color: "white" }}>
          <span style={{ color: "yellow" }}>2016-2018</span>
          {" - "}Worked as a data entry employee and government services
        </li>
        <li style={{ marginTop: "15px", color: "white" }}>
          <span style={{ color: "yellow" }}>2018-now</span>
          {" - "}Worked as Nutrition Specialist at Dr.Nutrition Center in Saudi
          Arabia
        </li>
      </ul>
    </Box>
    //     <div style={{width:'80vw',height:"90vh",margin:"10px"}}>
    //     {!isLoaded ? (
    //       <h1>Loading...</h1>
    //     ) : (
    //       <GoogleMap
    //         mapContainerClassName="map-container"
    //         center={center}
    //         zoom={10}
    //       >
    //       <Marker
    //   position={{ lat: 18.52043, lng: 73.856743 }}
    //   icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
    // />
    //       </GoogleMap>
    //     )}
    //   </div>
  );
}
