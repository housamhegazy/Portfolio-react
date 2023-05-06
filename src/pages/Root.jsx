
import React,{useState} from 'react'
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import Drawerr from "../components/Drawer";
export default function Root() {
    return (
        <>
            <Drawerr/>
            <Box>
                <Outlet />
            </Box>
            <Footer/>
        </>
    )
}