import React from 'react';
import './App.css';
import * as frontImage from './myface.jpeg';
import { Box, } from '@material-ui/core';

import Header from './Header';
function App() {
  
  const logodiv = {
    display: "flex",
    width: 400,
    height: 400,
    marginLeft: 400,
    borderRadius: 200,
    borderColor: "black",
    border: "1px solid #555",
    backgroundColor: "grey",
    justifyContent: "center",
}
  const img = frontImage.default;
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Box height="60px" />
        <div style={{display: "flex"}}>
          <div style={logodiv}>
            <img style={{ height: 400,borderRadius: 200,}} src={img} alt="Test"></img>
          </div>
          <div>
            <div style={{ height: 100}}></div>
            <div style={{ height: 100}}></div>
            <div style={{ height: 100}}></div>
            <div style={{ height: 100}}></div>
          </div>
        </div>
        <Box height="60px" />
      </main>

    </div>
  );
}

export default App;
