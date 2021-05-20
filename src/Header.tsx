import React from 'react';
import './App.css';
import { Box, Grid, } from '@material-ui/core';
import * as logo from './ant.png';
import { Navbar } from 'react-bootstrap'; 
import './Header.css';
function Header() {
    
    const logodiv = {
        display: "flex",
        width: 40,
        height: 40,
        marginLeft: 25,
        borderRadius: 50,
        borderColor: "black",
        border: "1px solid #555",
        backgroundColor: "grey",
        justifyContent: "center"
    }
    /*
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Box height="16px" />
                    <div style={{ display: "flex", height: 36 }}>
                        <Box width="34px" />
                        <div style={logodiv}>
                            <img style={{ height: 30, marginLeft: 2, marginTop: 2 }} src={img} alt="Test"></img>
                        </div>

                        <div style={{ marginTop: 3, marginLeft: 16, fontSize: "32px", fontWeight: 700, fontFamily: "'fRoboto Condensed',  sans-serif" }} >YOO DONGKEUN</div>
                        <Box width="30px" />
                        <div style={{ marginTop: 16, fontSize: "18px", fontFamily: "'fRoboto Condensed',  sans-serif" }}>Developer</div>
                    </div>
                    <Box height="16px" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper >xs=12 sm=6</Paper>
                </Grid>
            </Grid>*/
    const img = logo.default;
    const divider =  (
        <><Box width="20px"/>
        <Box>|</Box>
        <Box width="20px"/></>
    )

    return (

        <Navbar className = "head">
            <Navbar.Brand>  
                <div style={{display: 'flex'}}>
                    <div style={logodiv}>
                        <img style={{ height: 30}} src={img} alt="Test"></img>
                    </div>
                    <div style={{ marginTop: 3, marginLeft: 16, fontSize: "25px", fontWeight: 700, fontFamily: "'fRoboto Condensed',  sans-serif" }} >YOO DONGKEUN</div>
                    <Box width="30px" />
                    <div style={{ marginTop: 9, fontSize: "18px", fontFamily: "'fRoboto Condensed',  sans-serif" }}>Developer</div>
                
                    <div style={{ display: 'flex', position: 'absolute',right: 40}}>
                    <div style={{ marginTop: 5,fontWeight: 700, fontFamily: "'fRoboto Condensed',  sans-serif" }}>About</div>
                        {divider}
                    <div style={{ marginTop: 5,fontWeight: 700, fontFamily: "'fRoboto Condensed',  sans-serif" }}>Work</div>
                        {divider}
                    <div style={{ marginTop: 5,fontWeight: 700, fontFamily: "'fRoboto Condensed',  sans-serif" }}>Contact</div>
                    </div>
                </div>
            </Navbar.Brand>
        </Navbar>
    );
}

export default Header;
