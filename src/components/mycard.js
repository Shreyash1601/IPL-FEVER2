import {Card} from 'reactstrap';
import React,{Typography,Fragment,useState} from "react";
import logo from '../img/Vs.png';
import {getMatchDetails} from "../API/API";
import {Dialog,DialogTitle,DialogContentText,DialogActions, DialogContent,CardContent,Grid,Button,CardActions,useMediaQuery } from '@material-ui/core';
const Mycard =({match})=>{
    const [detail,setDetail]=useState({});
    const [open,setOpen]=useState(false);
    const handleClick=(id)=>{
        getMatchDetails(id).then((data)=>{console.log("Match details",data);setDetail(data);
        handleOpen()}).catch((error)=>console.log(error));
    }
    const getMatchCart=()=>{
        return (
            <Card style={{marginTop:20},{border:"2px solid coral"}}>
                <CardContent>
                <Grid container justify="center" alignItems="center" spacing={10}>
                    <Grid item justify="center">
                    <h4 style={{color:"green"}}>{match["team-1"]}</h4>
                    </Grid>
                    <Grid item justify="center">
                    <img style={{width:85}}src={logo} alt=""/>
                    </Grid>
                    <Grid item justify="center">
                        <h4 style={{color:"green"}}>{match["team-2"]}</h4>
                    </Grid>
                </Grid>
                </CardContent>
                <CardActions>
                <Grid container justify="center">
                <Button onClick={()=>{
                    handleClick(match["unique_id"])
                }} style={{marginBottom:5}} variant="contained" color="primary">Show Details</Button>
                <Button style={{marginLeft:20}} variant="contained" color="primary">
                  Start Date {new Date(match.dateTimeGMT).toLocaleString()}
                </Button>
                </Grid>
                </CardActions>
            </Card>
        );
    };
    const handleClose=()=>{
        setOpen(false)
    }
    const handleOpen=()=>{
        setOpen(true)
    }
    const getDialog=()=>(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Details.."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <h3>{detail.stat}</h3>
                    <h3>Match<span style={{fontStyle:"Italic",fontWeight:"Bold"}}>{detail.matchStarted?"Started":"Still Not Started"}</span></h3>
                    <h3>Score<span style={{fontStyle:"Italic",fontWeight:"Bold"}}>{detail.score}</span></h3>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
            Close</Button>
            </DialogActions>
        </Dialog>
    );
    return (<Fragment>
        {getMatchCart()}
        {getDialog()}
    </Fragment>
    )
};
export default Mycard;