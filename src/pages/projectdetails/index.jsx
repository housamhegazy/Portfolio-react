import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { projects } from "assest/data";
import { useState } from "react";
import Overlay from "./Overlay";
import CommonSection from "components/CommonSection";
import { Helmet } from "react-helmet";

export default function ProjectDetails() {
  const param = useParams();
  const project = projects.find((item) => item.id === Number(param.id));
  const [isOpen, setisOpen] = useState(false);
  const [img,setimg]=useState(null)
  return (

    <Box>
      <Helmet>
        <title>project details</title>
        <meta name="description" content="project details page" />
      </Helmet>
      <CommonSection >
        <Box component={'h2'} sx={{fontSize:{xs:"16px",md:"20px"} }}>{project.name}</Box>
        <Typography sx={{fontSize:{xs:"12px",md:"14px"} }}>{project.details}</Typography>
        <Box component="h3" sx={{color:"yellow",fontWeight:"400",fontSize:{xs:"12px",md:"14px"}}}>skills: {project.skills}</Box>
      </CommonSection>
      <Box
        sx={{ width: "100%", overflow: "auto",px:"20px",lineHeight:"100%"}}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "fit-content",
            minWidth: "100%",
            gap: "10px",
            py: "10px",
            alignItems: "center",
            justifyContent: "center",
            minHeight:'100%'
          }}
        >
          {project.imgURL.map((url, index) => {
            return (
              <Box
                key={index}
                sx={{ width: "200px", overflow: "hidden" ,maxHeight:"400px"}}
              >
                <img
                  style={{ width: "100%", cursor: "pointer",objectFit:"cover" }}
                  src={url}
                  alt="img"
                  onClick={(e) => {
                    setisOpen(true);
                    setimg(e.currentTarget.src)
                  }}
                />
              </Box>
            );
          })}
        </Stack>
      </Box>
      {/* overlay */}
      {isOpen && <Overlay {...{ project, setisOpen ,img}} />}
    </Box>
  );
}
