import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './container/AboutGame/About';

const App = () => (
  <div style={{backgroundColor: 'black'}}>
    <Navbar/>
    <About />
    {/* 
      -- LAYOUT STYLE --
      navbar
      header
      warlock
      titan
      hunter
      Where to buy
      source used
      footer
     */}
  </div>
);


export default App;


/* 

     Sources used so far:
     https://en.wikipedia.org/wiki/Destiny_2
     about game picture: https://www.pinterest.com/pin/509540145339629822/

*/