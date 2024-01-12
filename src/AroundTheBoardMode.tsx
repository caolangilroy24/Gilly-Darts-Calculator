import React, { useEffect, useState } from 'react'
import NumberTile from './NumberTile';
import ScoreBoard from './ScoreBoard';
import AroundTheBoardVisibleTiles from './AroundTheBoardVisibleTiles';

export default function AroundTheBoardMode() {
    let numberArray: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
    const [player1Position, setPlayer1Postiion]= useState(1);
    const [player2Position, setPlayer2Postiion]= useState(1);
    const [shotCounter, setShotCounter] = useState<number>(0);
    const [player1IsNext, setPlayer1IsNext] = useState<boolean>(true);

    

    function onTileClick(index: number) {
        console.log('clicked')
        let newShotCounter = shotCounter + 1;
        console.log(newShotCounter)
        setShotCounter(newShotCounter);
        const playerPosition = player1IsNext? player1Position : player2Position
        if (index === playerPosition) {
            let nextPosition = playerPosition + 1
            player1IsNext? setPlayer1Postiion(nextPosition) : setPlayer2Postiion(nextPosition)
        }

        if (newShotCounter >= 3) {
            // console.log('shotCounter >= 2 + shotCounter: ' + shotCounter)
            setShotCounter(0);
            setPlayer1IsNext(!player1IsNext);
        }

    }
    function onClick() {
        // setTestCount(testCount + 1)
        console.log('clickd')
    }
  
    function onX3Click() {
      //quickdebugconsole.log("X3 clicked")
      }
  
    function onX2Click() {
      //quickdebugconsole.log("X2 clicked")
      }
  return (
    <div className='standard-board'>
        <div className='standard-board-first-row'><ScoreBoard name="Caolan" isAroundTheBoardMode={true} playerTurn={player1IsNext}/> <ScoreBoard name='Dad' isAroundTheBoardMode={true} playerTurn={!player1IsNext}/></div>

        <div className='main'>
            <div className='game-container'>
                <AroundTheBoardVisibleTiles current={player1Position} onTileClick={onTileClick} onX2Click={onX2Click} onX3Click={onX3Click}/>

            </div>
        </div>
    </div>
  )
}
