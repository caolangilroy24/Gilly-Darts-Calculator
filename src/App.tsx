import React from 'react';
import logo from './logo.svg';
import './App.css';
import DartsHeader from './DartsHeader';
import NumberTile from './NumberTile';
import dartsBackground from './img/StockDarts.jpg';
import ChalkBoard from './ChalkBoard';
import MainMenu from './MainMenu';
import ScoreBoard from './ScoreBoard';
import StandardMode from './StandardMode';
import CricketMode from './CricketMode';
import AroundTheBoardMode from './AroundTheBoardMode';
import SelectUser from './SelectUser';


function App() {
              


  let num:number = 20;
  return (

    <div className="App" style={{backgroundImage:`url(${dartsBackground})`,backgroundRepeat:"no-repeat"}}>
      <DartsHeader />
      {/* <ScoreBoard name="Caolan"/> */}
      {/* <ChalkBoard /> */}
      {/* <NumberTile num={20}/> */}
      {/* <StandardMode /> */}
      {/* <AroundTheBoardMode /> */}
      <SelectUser />
      {/* <CricketMode /> */}
      {/* <div className='main'><div className='game-container'>{numberTiles}</div></div> */}
      
    </div>
  );
}

export default App;
