import React from 'react';
import logo from './logo.svg';
import './App.css';
import DartsHeader from './components/DartsHeader';
import NumberTile from './components/NumberTile';
import dartsBackground from './assets/StockDarts.jpg';
import ChalkBoard from './components/ChalkBoard';
import MainMenu from './pages/Home/MainMenu';
import ScoreBoard from './components/ScoreBoard';
import StandardMode from './pages/Standard/StandardMode';
import CricketMode from './pages/Cricket/CricketMode';
import AroundTheBoardMode from './pages/AroundTheBoard/AroundTheBoardMode';
import SelectUser from './components/SelectUser';
import GameRoutes from './components/GameRoutes';

function App() {
            
  return (

    <div className="App" style={{backgroundImage:`url(${dartsBackground})`,backgroundRepeat:"no-repeat"}}>
      <DartsHeader />
      <GameRoutes />
      {/* Commented out components for development process - to be removed later*/}
      {/* <ScoreBoard name="Caolan"/> */}
      {/* <ChalkBoard /> */}
      {/* <NumberTile num={20}/> */}
      {/* <StandardMode /> */}
      {/* <AroundTheBoardMode /> */}
      {/* <SelectUser /> */}
      {/* <CricketMode /> */}
      {/* <div className='main'><div className='game-container'>{numberTiles}</div></div> */}
      
    </div>
  );
}

export default App;
