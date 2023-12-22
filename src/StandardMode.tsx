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

    function onTileClick() {
      console.log("tile clicked")
    }

  function onX3Click() {
    console.log("tile clicked")
    }

  function onX2Click() {
    console.log("tile clicked")
    }

  myArray1.forEach((value)=> {
          numberTiles.push(<NumberTile num={value} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click}/>)
      })

    // myArray1.forEach((value)=> {
    //         numberTiles.push(<NumberTile num={value}/>)
    //     })
  return (
    <div className='standard-board'>
        {/* commented out because cricket score is breaking it - will maybe need a seperate cricket scoreboard */}
        {/* <div className='standard-board-first-row'><ScoreBoard name="Caolan"/><Bull bull='50'/><Bull bull='25'/>  <ScoreBoard name='Dad'/></div> */}
        
      <div className='main'><div className='game-container'>{numberTiles}</div></div>
        
    </div>
  )
}
