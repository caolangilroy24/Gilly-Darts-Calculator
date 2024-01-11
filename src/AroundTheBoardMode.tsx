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
    useEffect(() => {
        console.log('\n\n\n\@@@@@@@@@@@@@@@'+shotCounter)
        if (shotCounter > 2) {
            setPlayer1IsNext(!player1IsNext);
            setShotCounter(0);
        }
    },[shotCounter])

    

    function onTileClick(index: number) {
        console.log('clicked')

        // setShotCounter(prevShotCounter => prevShotCounter + 1)
        // console.log(shotCounter)
        // setShotCounter(prevShotCounter => {
        //     let nextShotCounter = prevShotCounter + 1
        //     console.log(nextShotCounter)

        //     if (nextShotCounter >= 2) {
        //         setPlayer1IsNext(!player1IsNext);
        //         return 0;
        //     }
        //     console.log(nextShotCounter)
        //     return nextShotCounter;
        // })

        if (shotCounter >= 2) {
            // console.log('shotCounter >= 2 + shotCounter: ' + shotCounter)
            setShotCounter(0);
            setPlayer1IsNext(!player1IsNext);
        }
        else {
            // console.log('shotCounter < 2 + shotCounter: ' + shotCounter)
            setShotCounter(shotCounter + 1);

        }
        // const newTiles = currentPlayer === 1 ? [...player1TileArray] : [...player2TileArray];
        // console.log('onCLICKLKK')
        // if (index === player1Position && player1IsNext) {
        //     console.log('player1Position')
        // }
        // if (index === player2Position && !player1IsNext) {
        //     console.log('player2Position')
        // }

        // seperatingIncrement()
        
        

        

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
// const tilesArray = currentPlayer === 1 ? player1TileArray : player2TileArray;
  return (
    <div className='standard-board'>
        <div className='standard-board-first-row'><ScoreBoard name="Caolan" isAroundTheBoardMode={true} playerTurn={player1IsNext}/> <ScoreBoard name='Dad' isAroundTheBoardMode={true} playerTurn={!player1IsNext}/></div>

        <div className='main'>
            <div className='game-container'>
                {/* {player1IsNext? player1Tiles: player2Tiles} */}
                {/* {tilesArray.map((isVisible, index) => (
                    <NumberTile num={index + 1} isHidden={!isVisible} onTileClick={() => onTileClick(index)} onX3Click={onX3Click} onX2Click={onX2Click}/>
                ))} */}
                <AroundTheBoardVisibleTiles current={player1Position} onTileClick={onTileClick} onX2Click={onX2Click} onX3Click={onX3Click}/>
                {/* {player1TileArray}<br/>
                {player2TileArray}<br/> */}

            </div>
        </div>
    </div>
  )
}
