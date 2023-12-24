import React, { useEffect, useState } from 'react'
import NumberTile from './NumberTile';
import ScoreBoard from './ScoreBoard';

export default function AroundTheBoardMode() {
    let numberArray: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
    const [player1Position, setPlayer1Postiion]= useState(0);
    const [player2Position, setPlayer2Postiion]= useState(0);
    const [testScoreArray, setTestScoreArray] = useState<JSX.Element[]>([]);
    const [visibleTiles, setVisibleTiles] = useState<number[]>([1,2,3])
    useEffect(() => {
        let tilesArray: JSX.Element[] = [];
        numberArray.forEach((value, index)=> {
            const isVisible = visibleTiles.includes(value)
            tilesArray.push(<NumberTile num={value} isHidden={!isVisible} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click}/>)
        })
        setTestScoreArray(tilesArray)
    }, [visibleTiles])

    function onTileClick(num: number) {
        let player1PositionCopy = player1Position
        player1PositionCopy = player1PositionCopy + 1  
        setPlayer1Postiion(player1PositionCopy)
        console.log('player1PositionCopy ' +player1PositionCopy)
        console.log('num ' +num)

        if (num === visibleTiles[0]) {
            let visibleTilesCopy = [...visibleTiles]
            visibleTilesCopy.push(num + 3)
            visibleTilesCopy = visibleTilesCopy.filter((tileNum)=> tileNum != num)
            setVisibleTiles(visibleTilesCopy)
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
        <div className='standard-board-first-row'><ScoreBoard name="Caolan" isAroundTheBoardMode={true}/> <ScoreBoard name='Dad' isAroundTheBoardMode={true}/></div>

        <div className='main'>
            <div className='game-container'>
                {testScoreArray}
            </div>
        </div>
    </div>
  )
}
