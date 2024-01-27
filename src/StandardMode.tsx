import React, {useEffect, useState} from 'react'
import ScoreBoard from './ScoreBoard'
import NumberTile from './NumberTile'
import Bull from './Bull';
import SelectUser from './SelectUser';

export default function StandardMode() {
    const myArray1: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
    const numberTiles: JSX.Element[] = [];
    const [player1Score, setPlayer1Score] = useState<number>(501);
    const [player1Wins, setPlayer1Wins] = useState<boolean>(false)
    const [player2Score, setPlayer2Score] = useState<number>(501);
    const [player2Wins, setPlayer2Wins] = useState<boolean>(false)
    const [shotCounter, setShotCounter] = useState(3)
    const [player1IsNext, setPlayer1IsNext] = useState(true)
    const [scoreBeforeTurn, setScoreBeforeTurn] = useState(501);
    const [scoreThisTurn, setScoreThisTurn] = useState(0);
    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');
    const [showSelectUser, setShowSelectUser] = useState(true);

    useEffect(()=> {
      if (player1Name && player2Name) {
        setShowSelectUser(false);
      }
    }, [player1Name, player2Name])

    function initiateGame(name1: string, name2: string, player1IsFirst: boolean) {
      setPlayer1Name(name1);
      setPlayer2Name(name2);
      setPlayer1IsNext(player1IsFirst)
    }

    myArray1.reverse();

    function handleDartThrown(value: number, checkoutAllowedDoubleHit: boolean = false) {
      if (player1Wins) return 0
      let newShotCounter = shotCounter - 1;
      setShotCounter(newShotCounter);
      const scoreThisTurnCopy = scoreThisTurn + value
      setScoreThisTurn(scoreThisTurnCopy);
      let nextScore = player1IsNext? player1Score - value : player2Score - value;
      player1IsNext? setPlayer1Score(nextScore) : setPlayer2Score(nextScore)
      if (nextScore === 0 && checkoutAllowedDoubleHit) player1IsNext? setPlayer1Wins(true) : setPlayer2Wins(true);
      else if (nextScore === 0 && !checkoutAllowedDoubleHit || nextScore < 0) {
        player1IsNext? setPlayer1Score(scoreBeforeTurn) : setPlayer2Score(scoreBeforeTurn);
        setScoreBeforeTurn(!player1IsNext? player1Score : player2Score)
        setScoreThisTurn(0);
        setShotCounter(3);
        setPlayer1IsNext(!player1IsNext);
      }
      if (newShotCounter <= 0){
        setScoreBeforeTurn(!player1IsNext? player1Score : player2Score)
        
        setScoreThisTurn(0);
        setShotCounter(3);
        setPlayer1IsNext(!player1IsNext);
      }

    }

    function onTileClick(value:number) {
      if (value === 50) handleDartThrown(value, true)
      else handleDartThrown(value)
    }

  function onX3Click(value:number) {
    handleDartThrown(value*3)
  }

  function onX2Click(value:number) {
      handleDartThrown(value * 2, true)
    }

  myArray1.forEach((value)=> {
          numberTiles.push(<NumberTile num={value} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click}/>)
      })

  if (showSelectUser){
    return (
      <SelectUser initiateGame={initiateGame}/>
    )
  } else {
    return (
      <div className='standard-board'>
          {/* commented out because cricket score is breaking it - will maybe need a seperate cricket scoreboard */}
          <div className='standard-board-first-row'><ScoreBoard playerTurn={player1IsNext} name={player1Name} score={player1Score} scoreBefore={scoreBeforeTurn} winner={player1Wins} shotCounter={shotCounter}/><Bull bull={50} onTileClick={onTileClick}/><Bull bull={25} onTileClick={onTileClick}/>  <ScoreBoard name={player2Name} playerTurn={!player1IsNext} score={player2Score} scoreBefore={scoreBeforeTurn} winner={player2Wins} shotCounter={shotCounter}/></div>
          
        <div className='main'><div className='game-container'>{numberTiles}</div></div>
          
      </div>
    )
  }

  
}
