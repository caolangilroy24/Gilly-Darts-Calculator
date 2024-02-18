import React, { useEffect, useState } from 'react'
import ScoreBoard from './ScoreBoard'
import NumberTile from './NumberTile'
import Bull from './Bull';
import SelectUser from './SelectUser';
import { LuUndo2 } from "react-icons/lu";


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
  let playerWhoWentFirst: string;
  const [gameState, setGameState] = useState<number[][]>([[]]) // odd = first to throw, even = second to throw
  const [turnCounter, setTurnCounter] = useState<number>(0);
  const [p1LastTurn, setP1LastTurn] = useState<number>()
  const [p2LastTurn, setP2LastTurn] = useState<number>()
  const [positionArray, setPositionArray] = useState<Array<{ turn: number, shot: number }>>([])
  useEffect(() => {
    if (player1Name && player2Name) {
      setShowSelectUser(false);
    }
  }, [player1Name, player2Name])

  function initiateGame(name1: string, name2: string, player1IsFirst: boolean, custumStartingScore?: number) {
    setPlayer1Name(name1);
    setPlayer2Name(name2);
    setPlayer1IsNext(player1IsFirst)
    player1IsFirst ? playerWhoWentFirst = name1 : playerWhoWentFirst = name1;
    let turnCounterCopy = turnCounter;
    setTurnCounter(turnCounterCopy += 1)
    if (custumStartingScore) {
      setPlayer1Score(custumStartingScore);
      setPlayer2Score(custumStartingScore);
    }
  }

  myArray1.reverse();

  function getPositionInShotArray(shotCount: number) {
    let position: number = 0;

    switch (shotCount) {
      case 3:
        position = 0;
        break;
      case 2:
        position = 1;
        break;
      case 1:
        position = 2;
        break;
    }

    return position;
  }

  function handleDartThrown(value: number, checkoutAllowedDoubleHit: boolean = false) {
    console.log('Handle Dart Thrown called Turn Counter: ' + turnCounter)
    if (player1Wins) return 0
    let newShotCounter = shotCounter - 1;
    const newGameState = [...gameState];
    let valueToPush = value;
    const scoreThisTurnCopy = scoreThisTurn + value

    const position = getPositionInShotArray(shotCounter)
    let positionArrayCopy = [...positionArray];
    positionArrayCopy.push({ turn: turnCounter - 1, shot: position });
    setPositionArray(positionArrayCopy);


    console.log(`Dart Pointer : gameState[${turnCounter - 1}][${position}]`)
    console.log('positionArrayCopy')
    console.log(positionArrayCopy)

    
    setShotCounter(newShotCounter);
    setScoreThisTurn(scoreThisTurnCopy);

    let nextScore = player1IsNext ? player1Score - value : player2Score - value;
    player1IsNext ? setPlayer1Score(nextScore) : setPlayer2Score(nextScore) //Can I turn this into a function?

    if (nextScore === 0 && checkoutAllowedDoubleHit) player1IsNext ? setPlayer1Wins(true) : setPlayer2Wins(true);
    else if (nextScore === 0 && !checkoutAllowedDoubleHit || nextScore <= 1) { //ADD NEW ARRAY
      valueToPush = -1; // this is a bust

      player1IsNext ? setPlayer1Score(scoreBeforeTurn) : setPlayer2Score(scoreBeforeTurn);
      setScoreBeforeTurn(!player1IsNext ? player1Score : player2Score)

      setScoreThisTurn(0);
      setShotCounter(3);

      if (gameState[turnCounter] == undefined) {
        console.log('Adding a empty array in handle dart thrown bust')
        setGameState(previousGameState => [...previousGameState, []])
      }
      let turnCounterCopy = turnCounter;
      setTurnCounter(turnCounterCopy += 1)
      setPlayer1IsNext(!player1IsNext);
    }

    newGameState[turnCounter - 1].push(valueToPush);
    setGameState(newGameState);

    if (newShotCounter <= 0) { // last Dart Thrown.
      setScoreBeforeTurn(!player1IsNext ? player1Score : player2Score) //switch whose score is held here

      if (gameState[turnCounter] == undefined) setGameState(previousGameState => [...previousGameState, []]) // if there isnt a [] at end of array, add one
      setScoreThisTurn(0); // these two are paired together quite a bit. can make them a function. 
      setShotCounter(3);
      let turnCounterCopy = turnCounter; // unsure if this is required or can i do it directly
      setTurnCounter(turnCounterCopy += 1) // increment turn counter
      setPlayer1IsNext(!player1IsNext); //switch players
    }
    console.log(gameState)

  }

  function onTileClick(value: number) {
    if (value === 50) handleDartThrown(value, true)
    else handleDartThrown(value)
  }

  function onX3Click(value: number) {
    handleDartThrown(value * 3)
  }

  function onX2Click(value: number) {
    handleDartThrown(value * 2, true)
  }

  function onUndo() {
    if (player1Score === 501 && player2Score === 501) return;
    console.log('\n\n\nundo clicked')
    let undoPosition = 0;
    let newShotCounter = shotCounter + 1;
    let newTurnCounter = turnCounter;
    let newPlayerOneIsNext = player1IsNext;
    if (gameState[newTurnCounter] !== undefined && gameState[newTurnCounter].length === 0) gameState.pop();

    console.log('shotCounter = ' + shotCounter)
    switch (shotCounter) {
      case 3:

        undoPosition = 2 //gameState[newTurnCounter-1].length;
        newShotCounter = 1;
        newTurnCounter = turnCounter - 1;
        newPlayerOneIsNext = !player1IsNext;

        let lastPosition = gameState[newTurnCounter - 1].length - 1;
        if (lastPosition !== 2) undoPosition = lastPosition;

        console.log('last Position = ' + lastPosition)
        console.log('gameState[newTurnCounter-1].length')
        console.log(gameState[newTurnCounter - 1].length)
        console.log(gameState[newTurnCounter - 1])
        setPlayer1IsNext(newPlayerOneIsNext);
        setTurnCounter(newTurnCounter);
        // gameState.pop();
        // Will need to change whose turn it is
        // Will need to change the score
        // Will need to change the shot counter
        // Will need to change the turn counter


        break;
      case 2:
        undoPosition = 0;
        if (gameState[newTurnCounter] && gameState[newTurnCounter].length === 1) gameState.pop();
        break;
      case 1:
        undoPosition = 1;
        break;
    }
    console.log('Turn counter: ' + turnCounter)
    console.log('New Turn counter: ' + newTurnCounter)
    const lastThrow = gameState[newTurnCounter - 1][undoPosition];
    const newGameState = gameState[newTurnCounter - 1].pop();
    const testPlayerScore = (newPlayerOneIsNext) ? player1Score : player2Score;
    console.log(`\n\n\n\n-----------debug-----------\n newTurnCounter-1 : ${newTurnCounter - 1} undoPosition : ${undoPosition}`)
    console.log(positionArray)
    console.log(`Test Player SCore : ${testPlayerScore} - lastThrow : ${lastThrow}`)
    console.log(gameState)
    console.log(newGameState);

    if (lastThrow !== -1) {
      console.log('MINUS 1 @@@@@@@@@@')
      const newScore = (newPlayerOneIsNext) ? player1Score + lastThrow : player2Score + lastThrow;
      newPlayerOneIsNext ? setPlayer1Score(newScore) : setPlayer2Score(newScore);
    } else {
      console.log('Undoing a bust')
      const scoredBeforeBust = gameState[newTurnCounter - 1].reduce((acc, num) => {
        return num !== -1 ? acc + num : acc
      }, 0
      );
      const newScore = (newPlayerOneIsNext) ? player1Score - scoredBeforeBust : player2Score - scoredBeforeBust;
      newPlayerOneIsNext ? setPlayer1Score(newScore) : setPlayer2Score(newScore);
    }


    player1IsNext ? console.log(player1Score) : console.log(player2Score)
    setShotCounter(newShotCounter);

  }

  function onMiss() {

    let newShotCounter = shotCounter + 1;
    // console.log(newShotCounter)
    setShotCounter(newShotCounter);
    if (newShotCounter >= 3) {
      setShotCounter(0);
      let turnCounterCopy = turnCounter;
      setTurnCounter(turnCounterCopy += 1)
      setPlayer1IsNext(!player1IsNext);
    }
  }

  myArray1.forEach((value) => {
    numberTiles.push(<NumberTile num={value} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click} />)
  })

  if (showSelectUser) {
    return (
      <SelectUser initiateGame={initiateGame} />
    )
  } else {
    return (
      <div className='standard-board'>
        <div className='standard-board-first-row'>
          <ScoreBoard playerTurn={player1IsNext} name={player1Name} score={player1Score} scoreBefore={scoreBeforeTurn} winner={player1Wins} shotCounter={shotCounter} />
          <Bull bull={50} onTileClick={onTileClick} /><Bull bull={25} onTileClick={onTileClick} />
          <ScoreBoard name={player2Name} playerTurn={!player1IsNext} score={player2Score} scoreBefore={scoreBeforeTurn} winner={player2Wins} shotCounter={shotCounter} />
        </div>
        <div className='undo-container'>
          <LuUndo2 onClick={onUndo} style={{ fontSize: "5vw", color: "white" }} />
        </div>
        <div className='main'>
          <div className='game-container'>{numberTiles}</div>
        </div>
        <div className='standard-board-first-row'>
          <div className='miss' onClick={onMiss}> Miss </div>
        </div>
      </div>
    )
  }


}
