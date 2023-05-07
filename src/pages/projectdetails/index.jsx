import { Box, Button, IconButton, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { projects } from "assest/data";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState } from "react";
import React from "react";
import { Close } from "@mui/icons-material";

export default function ProjectDetails() {
  const param = useParams();
  console.log(param.id);
  const project = projects.find((item) => item.id === Number(param.id));
  const [isOpen, setisOpen] = useState(false);
  return (
    <Box>
      <Box
        sx={{ width: "100%", overflow: "auto", my: "100px", background: "red" }}
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
          <Box sx={{ width: "200px", height: "300px", overflow: "hidden" }}>
            <img
              style={{ width: "100%", cursor: "pointer" }}
              src={project.imgURL}
              alt="img"
              onClick={()=>{
                setisOpen(true)
              }}
            />
          </Box>
          <Box sx={{ width: "200px", height: "300px", overflow: "hidden" }}>
            <img style={{ width: "100%" }} src={project.imgURL} alt="img" />
          </Box>
          <Box sx={{ width: "200px", height: "300px", overflow: "hidden" }}>
            <img style={{ width: "100%" }} src={project.imgURL} alt="img" />
          </Box>
        </Stack>
      </Box>
      {/* overlay */}
      {isOpen && (
        <Box
          sx={{
            position: "fixed",
            zIndex:1222,
            top: 0,
            width: "100%",
            margin:0,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#131617e0",
            padding:0
          }}
        >
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <TransformComponent>
                  <Box width={"50%"}sx={{mx:"auto"}}>
                    <img
                      style={{ width: "100%" }}
                      src={project.imgURL}
                      alt="img"
                    />
                  </Box>
                </TransformComponent>
                <div className="tools" style={{marginTop:"10px"}} >
                  <Button variant="contained" sx={{mx:1}} onClick={() => zoomIn()}>+</Button>
                  <Button variant="contained" sx={{mx:1}} onClick={() => zoomOut()}>-</Button>
                  <Button variant="contained" sx={{mx:1}} onClick={() => resetTransform()}>reset</Button>
                  <IconButton  onClick={()=>{
                setisOpen(false)
              }} >
                  <Close color="error"/>
                </IconButton>
                </div>
                
              </React.Fragment>
            )}
          </TransformWrapper>
        </Box>
      )}
    </Box>
  );
}
