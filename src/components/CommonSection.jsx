import { Box, Stack } from '@mui/material'
import React from 'react'
import commonsection from '../assest/images/commonsection.png'
const customstyle = {
    justifyContent:"center",alignItems:"center",width:"100%",height:"200px",backgroundImage:`url(${commonsection})`,backgroundSize:"cover"}
export default function CommonSection({children}) {
  return (
    <Stack sx={customstyle}>
        <Box color={"white"}sx={{background:"#1600ff94",p:2,borderRadius:"5px"}}>
            {children}
        </Box>
    </Stack>
  )
}
