import { Close } from '@mui/icons-material'
import { Box, Button, IconButton } from '@mui/material'
import React from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

export default function Overlay({project,setisOpen}) {
  return (
    <Box
    sx={{
      position: "fixed",
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
  )
}
