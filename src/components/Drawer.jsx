// @ts-ignore
// @ts-ignore
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, IconButton, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation, useNavigate } from "react-router-dom";
import profileimg from '../assest/images/profile.jpg'
import { Facebook, GitHub, Instagram, WhatsApp } from "@mui/icons-material";

const items = [
  { name: "Home", icon: <HomeIcon />, path: "/" },
  { name: "About", icon: <PersonIcon />, path: "/about" },
  { name: "Skills", icon: <TaskAltIcon />, path: "/skills" },
  { name: "My Works", icon: <VisibilityIcon />, path: "/mywork" },
  { name: "Contact", icon: <ContactMailIcon />, path: "/contact" },
];
function Drawerr({
  drawerWidth,
  handleDrawerToggle,
  mobileOpen,
  setMobileOpen,
  setloading,
  theme,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const socialMedia = [
    {
      // @ts-ignore
      icon: <GitHub color={`${theme.palette.mode === "light" && "primary"}`} />,
      path: "https://github.com/housamhegazy",
    },
    {
      icon: (
        // @ts-ignore
        <Instagram color={`${theme.palette.mode === "light" && "primary"}`} />
      ),
      path: "https://instagram.com/housamhegazy2?igshid=ZGUzMzM3NWJiOQ==",
    },

    {
      icon: (
        // @ts-ignore
        <WhatsApp color={`${theme.palette.mode === "light" && "primary"}`} />
      ),
      path: "https://wa.me/558412127",
    },

    {
      icon: (
        // @ts-ignore
        <Facebook color={`${theme.palette.mode === "light" && "primary"}`} />
      ),
      path: "https://www.facebook.com/housam.hegazy1",
    },
  ];

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Box sx={{py:'7px',display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Avatar alt="Travis Howard" src={`${profileimg}`} sx={{width:"100px",height:"100px"}} />
      </Box>
      <Divider />
      <List>
        {items.map((item, index) => (
          <ListItem className="list-item" key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
                setloading(true)
              }}
              sx={{
                "&:hover": {
                  background: theme.palette.primary.main,
                },
                transition: ".4s",
                background: `${
                  location.pathname === item.path
                    ? theme.palette.primary.main
                    : ""
                }`,
                color: location.pathname === item.path ? "white" : theme.palette.mode==='light'&&theme.palette.primary.main,
              }}
            >
              <ListItemIcon
                className="icon"
                sx={{
                  color: location.pathname === item.path ? "white" :  theme.palette.mode==='light'&&theme.palette.primary.main,
                  minWidth: "40px",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} className="icon-name" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "70%",
          mx: "auto",
          flexWrap: "wrap",
          mt:"60px"
        }}
      >
        {socialMedia.map((item, index) => {
          return (
            <Box key={index} sx={{ width: "50%" }}>
              <a href={item.path} target="_blank" rel="noreferrer">
                <IconButton
                  sx={{
                    color: `${theme.palette.mode === "light" && theme.palette.primary.main}`,
                  }}
                >
                  {item.icon}
                </IconButton>
              </a>
            </Box>
          );
        })}
      </Stack>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Drawerr;
