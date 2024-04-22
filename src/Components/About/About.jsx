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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                <Stack spacing={2} direction='row'className="paddingall">
                    <Card sx={{ minWidth: 50 +"%" , height : 160 }} className="gradient_about">
                    
                        <CardContent>
                        <Typography gutterBottom variant="body" component="div" sx={{color : '#ffffff'}}>
                              Visitors
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{color : '#ffffff'}}>
                              <CountUp delay={0.2} end={120836} duration={0.5}/>
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div" sx={{color : '#ccd1d1'}}>
                                Since last year
                            </Typography>
                        </CardContent>
                    
                    </Card>
                    <Card sx={{ minWidth: 50 +"%" , height : 160 }} className="gradient_about">
                    
                        <CardContent>
                        <Typography gutterBottom variant="body" component="div" sx={{color : '#ffffff'}}>
                                Sell Products
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{color : '#ffffff'}}>
                            <CountUp delay={0.2} end={82126} duration={0.5}/>
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div" sx={{color : '#ccd1d1'}}>
                            Since last year
                            </Typography>
                        </CardContent>
                    
                    </Card>
                </Stack>
                <Stack spacing={2} direction='row' className="paddingall">
                    <Card sx={{ minWidth: 50 +"%" , height : 160 }} className="gradient">
                        
                        <CardContent>
                        <Typography gutterBottom variant="body" component="div" sx={{color : '#ffffff'}}>
                            New Visiters
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{color : '#ffffff'}}>
                                <CountUp delay={0.2} end={24233} duration={0.5}/>
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div" sx={{color : '#ccd1d1'}}>
                                Last Few Months
                            </Typography>
                        </CardContent>
                    
                    </Card>
                    <Card sx={{ minWidth: 50 +"%" , height : 160 }} className="gradient">
                        
                        <CardContent>
                        <Typography gutterBottom variant="body" component="div" sx={{color : '#ffffff'}}>
                             Starting Offers
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{color : '#ffffff'}}>
                                <CountUp delay={0.2} end={728} duration={0.5}/>
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div" sx={{color : '#ccd1d1'}}>
                                Corrently
                            </Typography>
                        </CardContent>
                    
                    </Card>
                </Stack>
                </Grid>
                <Grid item xs={7}>
                    <Card sx={{ height: 49 + "vh" }}  className="paddingall">
                        
                        <CardContent>
                            <HbarChart/>
                        </CardContent>
                        
                    </Card>
                </Grid>
            </Grid>
            <Box height={20}/>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Card sx={{ height: 60 + "vh" }}>
                            
                            <CardContent>
                                <GeoChart/>
                            </CardContent>
                            
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{height: 60 + "vh" }} >
                            
                            <CardContent>
                                <PieChart/>
                            </CardContent>
                            
                        </Card>
                    </Grid>
                </Grid>
        </Box>
    </Box>
        </>
    )
}

export default About;