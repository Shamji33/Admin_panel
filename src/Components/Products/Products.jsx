import React from "react";
import SidebarNav from "../SidebarNav/SidebarNav";
import Box from '@mui/material/Box';
import Navbar from "../NavBar/Navbar";
import ViewProducts from "./ViewProducts";

function Products(){
    return(
        <>
         <Navbar/>
        <Box height={70}/>
        <Box sx={{ display: 'flex' }}>

            <SidebarNav/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
           <ViewProducts/>
        </Box>
        </Box>
        </>
    )
}

export default Products;