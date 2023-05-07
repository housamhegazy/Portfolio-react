import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { projects } from "assest/data";
import { useState } from "react";
import Overlay from "./Overlay";
import CommonSection from "components/CommonSection";

export default function ProjectDetails() {
  const param = useParams();
  const project = projects.find((item) => item.id === Number(param.id));
  const [isOpen, setisOpen] = useState(false);
  const [img,setimg]=useState(null)
  return (

    <Box>
      <CommonSection >
        <Box component={'h2'}>{project.name}</Box>
        <Typography>{project.details}</Typography>
        <Box component="h3" sx={{color:"yellow"}}>skills: {project.skills}</Box>
      </CommonSection>
      <Box
        sx={{ width: "100%", overflow: "auto", mb: "100px",background:"#35886da3" }}
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
          }}
        >
          {project.imgURL.map((url, index) => {
            return (
              <Box
                key={index}
                sx={{ width: "200px", height: "300px", overflow: "hidden" ,}}
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
