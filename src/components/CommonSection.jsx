import { Box, Stack } from '@mui/material'
import React from 'react'
import commonsection from '../assest/images/commonsection.png'
const customstyle = {
    justifyContent:"center",alignItems:"center",width:"100%",py:"20px",backgroundImage:`url(${commonsection})`,backgroundSize:"cover"}
export default function CommonSection({children}) {
  return (
    <Stack sx={customstyle}>
        <Box className={`header-font`} color={"white"}sx={{background:"#084b6e94",p:2,borderRadius:"5px",width:"100%"}} >
            {children}
        </Box>
    </Stack>
  )
}
