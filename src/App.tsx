import React from 'react';
import './App.css';
import * as frontImage from './myface.jpeg';
import * as createLogo from './createlogo.png';
import { Box, } from '@material-ui/core';
import {  BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import About from './About';
function App() {
  
  const img = frontImage.default;
  const logoimg = createLogo.default;
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
    <switch>
    <Route path="/" component={About} />
    <Route path="/Work" component={About} />
    <Route path="/Contact" component={About} />
    </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
