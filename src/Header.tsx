import React from 'react';
import './App.css';
import { Box, Grid,  } from '@material-ui/core';
import * as logo from './ant.png';
import { Navbar } from 'react-bootstrap'; 
import './Header.css';
import About from './About';
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
                    <div style={{ marginTop: 3, marginLeft: 16, fontSize: "25px", fontWeight: 700, fontFamily: "'fRoboto Condensed',  sans-serif" }} >YDK</div>
                    <Box width="30px" />
                    <div style={{ marginTop: 9, fontSize: "18px", fontFamily: "'fRoboto Condensed',  sans-serif" }}>Developer</div>
                
                    <div style={{ display: 'flex', position: 'absolute',right: 40}}>
                    <a style={{ marginTop: 5,fontWeight: 700, fontFamily: "'fRoboto Condensed',  sans-serif"}} href="/">About</a>
                        {divider}
                    <a style={{ marginTop: 5,fontWeight: 700, fontFamily: "'fRoboto Condensed',  sans-serif" }}  href="/Work">Work</a>
                        {divider}
                    <a style={{ marginTop: 5,fontWeight: 700, fontFamily: "'fRoboto Condensed',  sans-serif" }}  href="/Contact">Contact</a>
                    </div>
                </div>
            </Navbar.Brand>
        </Navbar>
    );
}

export default Header;
