import React, { useEffect, useState } from 'react'
import NumberTile from './NumberTile';
import ScoreBoard from './ScoreBoard';

export default function AroundTheBoardMode() {
    let numberArray: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
    const [player1Position, setPlayer1Postiion]= useState(0);
    const [player2Position, setPlayer2Postiion]= useState(0);
    const [player1TileArray, setP1TileArray] = useState<JSX.Element[]>([]);
    const [player2TileArray, setP2TileArray] = useState<JSX.Element[]>([]);
    const [player1VisibleTiles, setVisibleTiles] = useState<number[]>([1,2,3])
    const [shotCounter, setShotCounter] = useState<number>(0);
    const [player1IsNext, setPlayer1IsNext] = useState<boolean>(true);
    
    useEffect(() => {
        let tilesArray: JSX.Element[] = [];
        numberArray.forEach((value, index)=> {
            const isVisible = player1VisibleTiles.includes(value)
            tilesArray.push(<NumberTile num={value} isHidden={!isVisible} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click}/>)
        })
        setP1TileArray(tilesArray)
    }, [player1VisibleTiles])

    function onTileClick(num: number) {
        let player1PositionCopy = player1Position
        player1PositionCopy = player1PositionCopy + 1  
        setPlayer1Postiion(player1PositionCopy)
        console.log('player1PositionCopy ' +player1PositionCopy)
        console.log('num ' +num)
        if (shotCounter >= 2) {
            setShotCounter(0)
            setPlayer1IsNext(!player1IsNext)
            //quickdebugconsole.log(`after 3: ${shotCounter}`)
          } else {
            setShotCounter(shotCounter + 1)
    
          }

        if (num === player1VisibleTiles[0]) {
            let player1VisibleTilesCopy = [...player1VisibleTiles]
            player1VisibleTilesCopy.push(num + 3)
            player1VisibleTilesCopy = player1VisibleTilesCopy.filter((tileNum)=> tileNum != num)
            setVisibleTiles(player1VisibleTilesCopy)
        }


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
                {player1IsNext? player1TileArray: null}
            </div>
        </div>
    </div>
  )
}
