import React from 'react'
import ScoreBoard from './ScoreBoard'
import NumberTile from './NumberTile'
import Bull from './Bull';


export default function StandardMode() {
    const myArray1: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
    const numberTiles: JSX.Element[] = [];
    console.log(myArray1)
    myArray1.reverse();
    console.log(myArray1)

    myArray1.forEach((value)=> {
            numberTiles.push(<NumberTile num={value}/>)
        })
  return (
    <div className='standard-board'>
        <div className='standard-board-first-row'><ScoreBoard name="Caolan"/><Bull bull='50'/><Bull bull='25'/>  <ScoreBoard name='Dad'/></div>
        
      <div className='main'><div className='game-container'>{numberTiles}</div></div>
        
    </div>
  )
}
