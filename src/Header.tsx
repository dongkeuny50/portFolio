import React from 'react';
import './App.css';
import { Box, Grid, } from '@material-ui/core';
import styled from "styled-components";
import Paper from '@material-ui/core/Paper';
import * as logo from './ant.png';
function Header() {
    const styles = {
        header: {
            height: "12vh",
            background: "#c8c8c8",
        },
        footer: {
            height: 100,
            background: "#fff",
        },
    }
    const logodiv = {
        display: "flex",
        width: 40,
        height: 40,
        borderRadius: 50,
        borderColor: "black",
        border: "1px solid #555",
        backgroundColor: "grey",
        justifyContent: "center"
    }
    const img = logo.default;
    return (
        <header style={styles.header}>
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
            </Grid>
        </header>
    );
}

export default Header;
