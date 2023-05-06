import { Box } from "@mui/material";



export default function Footer({drawerWidth}){
    return (
        <Box sx={{width:{xs:"100%",sm:`calc(100% - ${drawerWidth}px)`},ml:{sm:`${drawerWidth}px`}}}>footer</Box>
    )
}