import React from 'react';
import logo from './logo.svg';
import './App.css';
import DartsHeader from './DartsHeader';
import NumberTile from './NumberTile';
import dartsBackground from './img/StockDarts.jpg';
import ChalkBoard from './ChalkBoard';
import MainMenu from './MainMenu';


function App() {
  const myArray1: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
  const numberTiles: JSX.Element[] = [];
  console.log(myArray1)
  myArray1.reverse();
  console.log(myArray1)

  myArray1.forEach((value)=> {
        numberTiles.push(<NumberTile num={value}/>)
    })            


  let num:number = 20;
  return (

    <div className="App" style={{backgroundImage:`url(${dartsBackground})`,backgroundRepeat:"no-repeat"}}>
      <DartsHeader />
      {/* <ChalkBoard /> */}
      {/* <NumberTile num={num}/> */}
      <div className='main'><div className='game-container'>{numberTiles}</div></div>
      
    </div>
  );
}

export default App;
