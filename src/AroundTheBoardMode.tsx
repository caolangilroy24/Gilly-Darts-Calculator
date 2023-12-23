import React from 'react'
import NumberTile from './NumberTile';
import ScoreBoard from './ScoreBoard';

export default function AroundTheBoardMode() {
    let numberArray: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
    // numberArray.reverse();
    let tilesArray: JSX.Element[] = [];
    function onTileClick() {
        //quickdebugconsole.log("tile clicked")
      }
  
    function onX3Click() {
      //quickdebugconsole.log("X3 clicked")
      }
  
    function onX2Click() {
      //quickdebugconsole.log("X2 clicked")
      }
  
    numberArray.forEach((value)=> {
            tilesArray.push(<NumberTile num={value} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click}/>)
    })
    // numberArray.forEach((value)=> {
    //     tilesArray.push(<NumberTile num={value}/>)
    // })
  return (
    <div className='standard-board'>
        {/* commented out because cricket score is breaking it - will maybe need a seperate cricket scoreboard */}
        {/* <div className='standard-board-first-row'><ScoreBoard name="Caolan" isAroundTheBoardMode={true}/> <ScoreBoard name='Dad' isAroundTheBoardMode={true}/></div> */}

        <div className='main'>
            <div className='game-container'>
                {tilesArray}
            </div>
        </div>
    </div>
  )
}
