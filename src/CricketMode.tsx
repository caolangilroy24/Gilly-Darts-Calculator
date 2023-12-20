import React from 'react'
import ScoreBoard from './ScoreBoard'
import NumberTile from './NumberTile'
import Bull from './Bull';


export default function CricketMode() {
    const myArray1: number[] = Array.from({ length: 6 }, (_, index) => index + 15);
    const numberTiles: JSX.Element[] = [];
    console.log(myArray1)
    myArray1.reverse();
    console.log(myArray1)

    myArray1.forEach((value)=> {
            numberTiles.push(<NumberTile num={value}/>)
        })

    // let bullStyle = {height: 30vh}};


    
  return (
    <div className='standard-board'>
        <div className='standard-board-first-row'><ScoreBoard name="Caolan" isCricketMode={true}/> <ScoreBoard name='Dad' isCricketMode={true}/></div>
        
      <div className='main'><div className='game-container'><Bull isCricketMode={true} bull='50'/><Bull bull='25' isCricketMode={true}/>{numberTiles}</div></div>
        
    </div>
  )
}
