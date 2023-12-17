import React from 'react';
import logo from './logo.svg';
import './App.css';
import DartsHeader from './DartsHeader';
// import image from './img/winmau.jpeg'

import dartsBackground from './img/StockDarts.jpg';


function App() {
  return (

    <div className="App" style={{backgroundImage:`url(${dartsBackground})`,backgroundRepeat:"no-repeat"}}>
      <DartsHeader />
    </div>
  );
}

export default App;
