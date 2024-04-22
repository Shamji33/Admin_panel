import React from "react";
import SidebarNav from "../SidebarNav/SidebarNav";
import Box from '@mui/material/Box';
import Navbar from "../NavBar/Navbar";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Stack, Typography } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CountUp from 'react-countup';
import "./Home.css"
import AccordionDash from "../Accordion/Accordion";
import BarChart from "../../assets/Charts/BarChart";
import DataTable from "./DataTable";


function Home(){
    return(
        <>
    <div className="bg_color">
            <Navbar/>
                <Box height={70}/>

                <Box sx={{ display: 'flex' }}>

            <SidebarNav/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                <Stack spacing={2} direction='row'>
                    <Card sx={{ minWidth: 49 +"%" , height : 150 }} className="gradient">
                    
                        <CardContent>
                            <div className="iconStyle">
                                <CreditCardIcon/>
                            </div>
                            <Typography gutterBottom variant="h5" component="div" sx={{color : '#ffffff'}}>
                                <span>$<CountUp delay={0.2} end={12825640} duration={0.5}/></span>
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div" sx={{color : '#ccd1d1'}}>
                            Total Earning
                            </Typography>
                        </CardContent>
                    
                    </Card>
                    <Card sx={{ minWidth: 49 +"%" , height : 150 }}  className="gradient_light">
                            
                        <CardContent>
                            <div className="iconStyle">
                                <ShoppingBagIcon/>
                            </div>
                            <Typography gutterBottom variant="h5" component="div"  sx={{color : '#ffffff'}}>
                                <CountUp delay={0.2} end={125822} duration={0.5}/>
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div" sx={{color : '#ccd1d1'}}>
                            Total Orders
                            </Typography>
                        </CardContent>
                        
                    </Card>
                </Stack>
                </Grid>
                <Grid item xs={4}>

                    <Stack spacing={2}>
                        <Card sx={{ maxWidth: 345 }}  className="gradient_light">  
                            <Stack spacing={2} direction='row'>
                                <div className="iconStyle">
                                    <Inventory2Icon/>   
                                </div>
                                <div className="padding_all">
                                    <span className="price_title"> 
                                        <CountUp delay={0.2} end={784451} duration={0.5}/>
                                    </span>
                                    <br/>
                                    <span  className="price_sub-title"> Total Products</span>
                                </div>
                            </Stack>
                        </Card>

                    
                        <Card sx={{ maxWidth: 345 }} className="gradient">
                            <Stack spacing={2} direction='row'>
                                <div className="iconStyle">
                                    <RemoveShoppingCartIcon />   
                                </div>
                                <div className="padding_all" >
                                    <span className="price_title"> 
                                        <CountUp delay={0.2} end={8260} duration={0.5}/>
                                    </span>
                                    <br/>
                                    <span  className="price_sub-title"> Out Of Stock</span>
                                </div>
                            </Stack> 
                        </Card>
                    </Stack>
                
                </Grid>
            </Grid>
            <Box height={20}/>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Card sx={{ height: 60 + "vh" }}>
                            
                            <CardContent>
                                <BarChart/>
                            </CardContent>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{height: 60 + "vh" }} >
                            
                            <CardContent>
                            <div className="padding_all card_title_border" >
                                <span className="card_title">Popular Products</span>
                            </div>
                            <AccordionDash/>
                            </CardContent>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={12}>     
                         
                                <DataTable/>
                        
                    
                    </Grid>
                </Grid>
            </Box>
            
        </Box>
    </div>
        </>
    )
}

export default Home;