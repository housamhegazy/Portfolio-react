import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';

export default function AppBarr({drawerWidth,handleDrawerToggle}){
    return (
        <AppBar position="static" sx={{width:{xs:"100%",sm:`calc(100% - ${drawerWidth}px)`},ml:{sm:`${drawerWidth}px`}}}>
        <Toolbar>
          <IconButton
          onClick={()=>{
            handleDrawerToggle()
          }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 ,display:{sm:"none"}}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Housam Hegazy
          </Typography>
        </Toolbar>
      </AppBar>
    )
}