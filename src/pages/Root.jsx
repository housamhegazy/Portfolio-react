import React, { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import Drawerr from "../components/Drawer";
import AppBarr from "../components/Appbar";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import getDesignTokens from "../style/MuiTheme";

const drawerWidth = 150;
export default function Root() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const localTheme = localStorage.getItem("localTheme");
  const [mode, setmode] = useState(
    localTheme === null ? "light" : localTheme === "light" ? "light" : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  //dark mood function
  const darkmoodFunc = () => {
    localStorage.setItem(
      "localTheme",
      theme.palette.mode === "dark" ? "light" : "dark"
    );
    setmode(theme.palette.mode === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <AppBarr {...{ drawerWidth, handleDrawerToggle,theme,darkmoodFunc }} />
        <Drawerr
          {...{
            drawerWidth,
            handleDrawerToggle,
            mobileOpen,
            setMobileOpen,
            darkmoodFunc,
            theme,
          }}
        />
        <Box component='section'
          sx={{
            width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            minHeight:`calc(100vh - 112px)`
          }}
        >
          <Outlet />
        </Box>
        <Footer {...{ drawerWidth,theme }} />
      </Box>
    </ThemeProvider>
  );
}
