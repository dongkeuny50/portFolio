import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, } from '@material-ui/core';


import Header from './Header';
function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Box height="60px" />
        <div style={{ height: 100 }} >
          <></>
        </div>
        <Box height="60px" />
      </main>

    </div>
  );
}

export default App;
