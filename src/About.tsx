import React from 'react';
import * as frontImage from './myface.jpeg';
import * as createLogo from './createlogo.png';
import { Box, } from '@material-ui/core';
import './About.css';
function About() {
  
    const img = frontImage.default;
    const logoimg = createLogo.default;
  
  return (
    <main className="App-main">
        <div style={{display: "flex",justifyContent:'center'}}>
            <img style={{ width: 300,marginTop:120,
                height: 300,borderRadius: 200,borderColor: 'black',  border: "4px dashed #bcbcbc"}} src={img} alt="Test"></img>
          <div style={{display: "flex", flexDirection : 'column'}}>
            <img style={{marginLeft:40, height: 80}} src={logoimg} alt="Test"></img>
            
          <Box height="3vh" />

            <p style={{marginLeft:120 ,fontWeight: 700,fontSize: "22px", fontFamily: "'Oswald',  sans-serif"}}>Yoo DongKeun</p>
            <h4  style={{marginLeft:150 ,fontWeight: 700,fontSize: "15px", }}>・Hokkaido Univ BC4</h4>
            <h4  style={{marginLeft:150 ,fontWeight: 700,fontSize: "15px", }}>・Information and Data Analysis Lab</h4>
            <Box height="3vh"/>
            <p style={{marginLeft:120,fontWeight: 700, fontSize: "22px", fontFamily: "'Oswald',  sans-serif"}}>Full Stack Engineer</p>
            <h4  style={{marginLeft:150 ,fontWeight: 700,fontSize: "15px", }}>・Naver Whale Application Comp. Champion team</h4>
            <h4  style={{marginLeft:150 ,fontWeight: 700,fontSize: "15px", }}>・Datagrid Frontend Engineer</h4>
            <h4  style={{marginLeft:150 ,fontWeight: 700,fontSize: "15px", }}>・Lots of Firebase Experience</h4>
            <Box height="3vh"/>
            <p style={{marginLeft:120, fontWeight: 700,fontSize: "22px", fontFamily: "'Oswald',  sans-serif"}}>AI Researcher</p>
            <h4  style={{marginLeft:150 ,fontWeight: 700,fontSize: "15px", }}>・Data Analysis with RStan</h4>
            <h4  style={{marginLeft:150 ,fontWeight: 700,fontSize: "15px", }}>・NLP</h4>
            <h4  style={{marginLeft:150 ,fontWeight: 700,fontSize: "15px", }}>・GAN</h4>
          </div>
        </div>
        </main>
  );
}

export default About;
