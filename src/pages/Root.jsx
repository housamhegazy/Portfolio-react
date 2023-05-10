import React, { useState, useMemo, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import Drawerr from "../components/Drawer";
import AppBarr from "../components/Appbar";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import getDesignTokens from "../style/MuiTheme";
import { RingLoader } from "react-spinners";

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
  const [loading, setloading] = useState(false);
  const loader = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <RingLoader
        color={theme.palette.mode === 'light'?theme.palette.primary.main:"white"}
        // loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  );
  useEffect(() => {
    setloading(true);
    setInterval(() => {
      setloading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <AppBarr
          {...{ drawerWidth, handleDrawerToggle, theme, darkmoodFunc }}
        />
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
        <Box
          component="section"
          sx={{
            width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            minHeight: `calc(100vh - 112px)`,
            height: "100%",
          }}
        >
          {loading ? loader : <Outlet />}
        </Box>
        <Footer {...{ drawerWidth, theme }} />
      </Box>
    </ThemeProvider>
  );
}
