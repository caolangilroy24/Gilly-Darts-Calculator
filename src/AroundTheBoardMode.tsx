import React from 'react'
import NumberTile from './NumberTile';
import ScoreBoard from './ScoreBoard';

export default function AroundTheBoardMode() {
    let numberArray: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
    // numberArray.reverse();
    let tilesArray: JSX.Element[] = [];
    numberArray.forEach((value)=> {
        tilesArray.push(<NumberTile num={value}/>)
    })
  return (
    <div className='standard-board'>
        <div className='standard-board-first-row'><ScoreBoard name="Caolan" isAroundTheBoardMode={true}/> <ScoreBoard name='Dad' isAroundTheBoardMode={true}/></div>

        <div className='main'>
            <div className='game-container'>
                {tilesArray}
            </div>
        </div>
    </div>
  )
}
