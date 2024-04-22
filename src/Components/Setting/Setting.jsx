import React from "react";
import SidebarNav from "../SidebarNav/SidebarNav";
import Box from '@mui/material/Box';
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Navbar from "../NavBar/Navbar";
import CountUp from 'react-countup';
import GeoChart from "../../assets/Charts/GeoChart";
import PieChart from "../../assets/Charts/PieChart";
import HbarChart from "../../assets/Charts/HbarChart";
import './About.css'

function About(){
    return(
        <>
         <Navbar/>
        <Box height={30}/>
    <Box sx={{ display: 'flex' }}>

            <SidebarNav/>
        
    </Box>
        </>
    )
}

export default About;