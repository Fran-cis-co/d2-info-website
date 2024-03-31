import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './container/AboutGame/About';
import Hunter from './container/Hunter/Hunter';

const App = () => (
  <div style={{backgroundColor: 'black'}}>
    <Navbar/>
    <About />
    <Hunter />
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
     Classes: https://www.destinypedia.com
     Hunter solar gif: https://giphy.com/gifs/DestinyTheGame-destiny-2-destiny2-fAlgdz2ZLI7WPHfjty
*/