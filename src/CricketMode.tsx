import React, { useEffect, useState } from 'react'
import ScoreBoard from './CricketScoreBoard'
import NumberTile from './NumberTile'
import Bull from './Bull';
import CricketScoreBoard from './CricketScoreBoard';

interface ScoreObject {
    value: number;
    score: number;
}


export default function CricketMode() {
  const[winner, setWinner] = useState<string>('')
  let gameOver: boolean = false;
  const initialScoresP1 = Array.from({ length: 6 }, (_, index) =>  ( {value: (index + 15), score: 3}));
  const initialScoresP2 = Array.from({ length: 6 }, (_, index) =>  ( {value: (index + 15), score: 3}));
  const [player1IsNext, setPlayer1IsNext] = useState<boolean>(true);
  const [player1Wins, setPlayer1Wins] = useState<boolean>(false);
  const [player2Wins, setPlayer2Wins] = useState<boolean>(false);
  const [shotCounter, setShotCounter] = useState<number>(0);
  const [player1ScoreArray, setPlayer1Score ] = useState<ScoreObject[]>([...initialScoresP1]);
  const [player2ScoreArray, setPlayer2Score ] = useState<ScoreObject[]>([...initialScoresP2]);
  const tileArray: number[] = Array.from({ length: 6 }, (_, index) => index + 15);
  const numberTiles: JSX.Element[] = [];

  useEffect(() => {
    // const initialScoreArray = Array.from({ length: 6 }, (_, index) =>  ( {value: (index + 15), score: 3}))
    setPlayer1Score([...player1ScoreArray, {value: 50, score: 3}])
    setPlayer2Score([...player2ScoreArray, {value: 50, score: 3}])
  }, [])

  useEffect(()=> {
    const p1Win = player1ScoreArray.every((obj)=>  obj.score === 0)
    const p2Win = player2ScoreArray.every((obj)=>  obj.score === 0)
    player1ScoreArray.every((obj)=> {
      if (p1Win) {
        setWinner('Player 1')
        console.log(winner)
        setPlayer1Wins(true)
      } else if (p2Win) {
        setWinner('Player 2')
        setPlayer2Wins(true)
        console.log(winner)
      }
    })
  }, [player1ScoreArray, player2ScoreArray])

  tileArray.reverse();
  function onTileClick(num: number) {
    console.log(winner)
    if (winner === '') {
      console.log('shot counter is ' + shotCounter  + ' and player1IsNext is ' + player1IsNext)
      if (shotCounter >= 2) {
        setShotCounter(0)
        setPlayer1IsNext(!player1IsNext)
        console.log(`after 3: ${shotCounter}`)
      } else {
        setShotCounter(shotCounter + 1)

      }
      let player1ScoreArrayCopy: ScoreObject[] = [... player1ScoreArray]
      let player2ScoreArrayCopy: ScoreObject[] = [... player2ScoreArray]
      let matchingObject: ScoreObject | undefined;
      // let matchingObject = player1IsNext? player1ScoreArrayCopy.find((obj)=> obj.value === num): player2ScoreArrayCopy.find((obj)=> obj.value === num)
      if (player1IsNext) {
        matchingObject = player1ScoreArrayCopy.find((obj)=> obj.value === num);
      } else {
        matchingObject = player2ScoreArrayCopy.find((obj)=> obj.value === num)
      }

      // let matchingObject = player1ScoreArrayCopy.find((obj)=> obj.value === num)
      if (matchingObject && matchingObject.score > 0) {
        //quickdebugconsole.log('before:')

        //quickdebugconsole.log(matchingObject.score)
        matchingObject.score = matchingObject.score - 1
        //quickdebugconsole.log(matchingObject.score)
        
      }
      console.log(`player1IsNext is ${player1IsNext}`)
      console.log(`player1ScoreArrayCopy is`)
      player1ScoreArrayCopy.forEach((obj)=> console.log(obj))
      console.log(`player2ScoreArrayCopy is`)
      player2ScoreArrayCopy.forEach((obj)=> console.log(obj))
      player1IsNext? setPlayer1Score(player1ScoreArrayCopy): setPlayer2Score(player2ScoreArrayCopy)
      console.log('After update')//quickdebugconsole.log(player1ScoreArrayCopy)
      console.log(`player1ScoreArrayCopy is`)
      player1ScoreArrayCopy.forEach((obj)=> console.log(obj))
      console.log(`player2ScoreArrayCopy is`)
      player2ScoreArrayCopy.forEach((obj)=> console.log(obj))
    }
  }

  function onX3Click(num: number) {
    if (winner === '') {
      setShotCounter(shotCounter + 1)

      if (shotCounter >=2) {
        setShotCounter(0)
        setPlayer1IsNext(!player1IsNext)
      }
      
      let player1ScoreArrayCopy: ScoreObject[] = [... player1ScoreArray]
      let player2ScoreArrayCopy: ScoreObject[] = [... player2ScoreArray]
      // let matchingObject = player1ScoreArrayCopy.find((obj)=> obj.value === num)
      let matchingObject = player1IsNext? player1ScoreArrayCopy.find((obj)=> obj.value === num): player2ScoreArrayCopy.find((obj)=> obj.value === num)

      if (matchingObject && matchingObject.score > 0) matchingObject.score = matchingObject.score - 3
      player1IsNext? setPlayer1Score(player1ScoreArrayCopy): setPlayer2Score(player2ScoreArrayCopy)
      //quickdebugconsole.log(player1ScoreArrayCopy)
    }
  }

  function onX2Click(num: number) {
    if (winner === '') {
      setShotCounter(shotCounter + 1)
      if (shotCounter >=2) {
        setShotCounter(0)
        setPlayer1IsNext(!player1IsNext)
      }
      let player1ScoreArrayCopy: ScoreObject[] = [... player1ScoreArray]
      let player2ScoreArrayCopy: ScoreObject[] = [... player2ScoreArray]
      let matchingObject = player1IsNext? player1ScoreArrayCopy.find((obj)=> obj.value === num): player2ScoreArrayCopy.find((obj)=> obj.value === num)
      if (matchingObject && matchingObject.score > 0) matchingObject.score = matchingObject.score - 2
      player1IsNext? setPlayer1Score(player1ScoreArrayCopy): setPlayer2Score(player2ScoreArrayCopy)
      //quickdebugconsole.log(player1ScoreArrayCopy)
      // setShotCounter(shotCounter + 1)
    }


  }
  function onMiss() {
    if (winner === '') {
      setShotCounter(shotCounter + 1)
      if (shotCounter >=2) {
        setShotCounter(0)
        setPlayer1IsNext(!player1IsNext)
      }
    }
  }

  tileArray.forEach((value)=> {
          numberTiles.push(<NumberTile num={value} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click}/>)
      })

  // let bullStyle = {height: 30vh}};


  
  return (
    <div className='standard-board'>
        <div className='standard-board-first-row'><CricketScoreBoard key='Player 1' name="Caolan" scoreArray={player1ScoreArray} playerTurn={player1IsNext} winner={player1Wins}/> <CricketScoreBoard key='Player 2' name='Dad' scoreArray={player2ScoreArray} playerTurn={!player1IsNext} winner={player2Wins}/></div>
      <div className='main'><div className='game-container'><Bull isCricketMode={true} bull={50} onX2Click={onX2Click}/><Bull isCricketMode={true} bull={25} onTileClick={onTileClick}/>{numberTiles}</div></div>
      <div className='standard-board-first-row'><div className='miss' onClick={onMiss}> Miss </div></div>
    </div>
  )
}
