import { Box, Button, IconButton, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { projects } from "assest/data";
import { useState } from "react";
import Overlay from "./Overlay";

export default function ProjectDetails() {
  const param = useParams();
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
          {project.imgURL.map((url, index) => {
            return (
              <Box
                key={index}
                sx={{ width: "200px", height: "300px", overflow: "hidden" }}
              >
                <img
                  style={{ width: "100%", cursor: "pointer" }}
                  src={url}
                  alt="img"
                  onClick={() => {
                    setisOpen(true);
                  }}
                />
              </Box>
            );
          })}
        </Stack>
      </Box>
      {/* overlay */}
      {isOpen && <Overlay {...{ project, setisOpen }} />}
    </Box>
  );
}
