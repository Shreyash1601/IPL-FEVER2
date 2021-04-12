import { AppBar,IconButton,Toolbar,Typography } from "@material-ui/core";
import SportsCricketIcon from '@material-ui/icons/SportsCricket';

import React from "react";
const Navbar=()=>{
    return(
        <AppBar position="static" color="secondary">
            <Toolbar>
            <IconButton color="inherit">
<SportsCricketIcon></SportsCricketIcon>
            </IconButton>
                <Typography variant="h3">IPL Fever &#128293;&#128293;</Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;