// import logo from './logo.svg';
import React,{useEffect,useState,Fragment} from "react";
import './App.css';
import {Button,Grid} from "@material-ui/core";
import Navbar from './components/navbar';
import Mycard from './components/mycard';
import {getMatches} from "./API/API";
function App() {
    const [matches,setMatches]=useState([]);
    useEffect(() => {
        getMatches().then((data)=>{setMatches(data.matches);
        console.log(data.matches);}).catch(error=>alert("Could not load data"));
    }, [])
    return (
        <div className="App">
            <Navbar></Navbar>
            <h1 style={{color:"crimson"}}>Welcome to IPL Fever</h1>
            <Grid container>
            <Grid sm="2"></Grid>
            <Grid sm="8">
            {matches.map((match)=>(
                <Fragment key={match.unique_id}>
                {
                    (match.unique_id>=1254000)?(match.unique_id<12541000)?
                    <Mycard match={match}/>:"":""}
</Fragment>
            ))
                
            
            }
            </Grid>
            </Grid>
{}
        </div>
    );
}

export default App;