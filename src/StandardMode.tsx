import React, {useEffect, useState} from 'react'
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
    useEffect(()=> {
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

    function handleDartThrown(value: number, checkoutAllowedDoubleHit: boolean = false) {
      console.log('Handle Dart Thrown called')
      if (player1Wins) return 0
      let newShotCounter = shotCounter - 1;
      
      // console.log(gameState[turnCounter])

      const newGameState = [...gameState];
      // console.log(newGameState)
      // console.log(newGameState[turnCounter -1])
      // console.log('turnCounter ' +turnCounter)
      let valueToPush = value;
      // newGameState[turnCounter -1].push(value);
      const thisRound = newGameState[turnCounter -1]
      const sum = thisRound.reduce((acc, num) => {
        return num !== -1? acc + num: acc}, 0
      );
      player1IsNext ? setP1LastTurn(sum) : setP2LastTurn(sum);
      // console.log('SUM this round = ' + sum)

      // setGameState(newGameState);
      // console.log('updating Game State: ' +newGameState)
      
      // console.log(gameState)
      // console.log(typeof(gameState))
      

      // console.log('@@@@@@@@@@gameState')
      // console.log(newShotCounter === 2)

      setShotCounter(newShotCounter);
      const scoreThisTurnCopy = scoreThisTurn + value
      setScoreThisTurn(scoreThisTurnCopy);
      let nextScore = player1IsNext? player1Score - value : player2Score - value;
      player1IsNext? setPlayer1Score(nextScore) : setPlayer2Score(nextScore)
      if (nextScore === 0 && checkoutAllowedDoubleHit) player1IsNext? setPlayer1Wins(true) : setPlayer2Wins(true);
      else if (nextScore === 0 && !checkoutAllowedDoubleHit || nextScore <= 1) { //ADD NEW ARRAY
        valueToPush = -1; // this is a bust

        player1IsNext? setPlayer1Score(scoreBeforeTurn) : setPlayer2Score(scoreBeforeTurn);
        setScoreBeforeTurn(!player1IsNext? player1Score : player2Score)
        setScoreThisTurn(0);
        setShotCounter(3);
        let turnCounterCopy = turnCounter;
        setPlayer1IsNext(!player1IsNext);
        if (gameState[turnCounter] == undefined) {
          // console.log(gameState[turnCounter])
          // console.log('Empty')
          // console.log('turnCounter ' +turnCounter)
          // console.log(gameState)
          console.log('Adding a empty array in handle dart thrown bust')
          setGameState(previousGameState => [...previousGameState, []])

        }

        setTurnCounter(turnCounterCopy += 1)


      }
      newGameState[turnCounter -1].push(valueToPush);
      setGameState(newGameState);
      if (newShotCounter <= 0){
        setScoreBeforeTurn(!player1IsNext? player1Score : player2Score)
        if (gameState[turnCounter] == undefined) setGameState(previousGameState => [...previousGameState, []])
        setScoreThisTurn(0);
        setShotCounter(3);
        let turnCounterCopy = turnCounter;
        setTurnCounter(turnCounterCopy += 1)
        setPlayer1IsNext(!player1IsNext);
      }
      console.log(gameState)

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

  function onUndo() {
    if (player1Score === 501 && player2Score === 501) return;
    // console.log('\n\n\nundo clicked')
    let undoPosition = 0;
    let newShotCounter = shotCounter + 1;
    let newTurnCounter = turnCounter;
    let newPlayerOneIsNext = player1IsNext;
    if (gameState[newTurnCounter] !== undefined && gameState[newTurnCounter].length === 0) gameState.pop();

    console.log('shotCounter = ' +shotCounter)
    switch(shotCounter) {
      case 3:
  
        undoPosition = 2 //gameState[newTurnCounter-1].length;
        newShotCounter = 1;
        newTurnCounter = turnCounter - 1;
        newPlayerOneIsNext = !player1IsNext;
        
        let lastPosition = gameState[newTurnCounter-1].length - 1;
        if (lastPosition !== 2) undoPosition = lastPosition;
    
        console.log('last Position = ' +lastPosition)
        console.log('gameState[newTurnCounter-1].length')
        console.log(gameState[newTurnCounter-1].length)
        console.log(gameState[newTurnCounter-1])
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
    console.log('Turn counter: ' +turnCounter)
    console.log('New Turn counter: ' +newTurnCounter)
    // console.log(gameState)
    // console.log(typeof(gameState))
    // console.log(gameState[newTurnCounter-1])
    // console.log(undoPosition)
    // console.log(gameState[newTurnCounter-1][undoPosition])
    const lastThrow = gameState[newTurnCounter-1][undoPosition];
    const newGameState = gameState[newTurnCounter-1].pop();
    // console.log('newGameState')
    console.log(gameState)
    console.log(newGameState);
    // const newShotCounter = shotCounter + 1;
    // console.log('newShotCounter')
    // console.log(newShotCounter)
    // console.log('Shot counter: ' +shotCounter)

    // console.log('player 1 is next: ' +newPlayerOneIsNext)
    const testPlayerScore = (newPlayerOneIsNext)? player1Score : player2Score;
    console.log(`\n\n\n\n-----------debug-----------\n newTurnCounter-1 : ${newTurnCounter-1} undoPosition : ${undoPosition}`)
    console.log(`Test Player SCore : ${testPlayerScore} - lastThrow : ${lastThrow}`)

    if (lastThrow !== -1) {
      console.log('MINUS 1 @@@@@@@@@@')
      const newScore = (newPlayerOneIsNext)? player1Score + lastThrow : player2Score + lastThrow;
      newPlayerOneIsNext? setPlayer1Score(newScore) : setPlayer2Score(newScore);
    } else {
      console.log('Undoing a bust')
      const scoredBeforeBust = gameState[newTurnCounter-1].reduce((acc, num) => {
        return num !== -1? acc + num: acc}, 0
      );
      const newScore = (newPlayerOneIsNext)? player1Score - scoredBeforeBust : player2Score - scoredBeforeBust;
      newPlayerOneIsNext? setPlayer1Score(newScore) : setPlayer2Score(newScore);
    }

    
    player1IsNext? console.log(player1Score) : console.log(player2Score)
    setShotCounter(newShotCounter);

    // if (turnCounter === 0) {
    //   console.log('true')
    //   console.log(true)
    //   return;
    // } else {
    //   let gameStateCopy = [...gameState];
    //   let turnCounterCopy = turnCounter;


    //   if (shotCounter === 3) {

    //     console.log('shotCounter === 3')
    //     console.log('shot == 3 turnCounterCopy = ' + turnCounterCopy)

    //     turnCounterCopy = turnCounterCopy - 1;
    //     setShotCounter(1)
    //     console.log('shot == 3 turnCounterCopy = ' + turnCounterCopy)
    //     setTurnCounter(turnCounterCopy);
    //     gameStateCopy.pop();

    //   }
    // console.log('\n\n\nGameState Copy')
    // console.log(gameStateCopy)
    // // gameStateCopy[turnCounterCopy].pop();
    // console.log('gameStateCopy after')
    // console.log(gameStateCopy)


    // }

  //   // if (player1IsNext) { BIN THIS 
  //   //   let newScore = player1Score + p1LastTurn;
  //   //   setPlayer1Score(newScore);
  //   //   setScoreThisTurn(0);
  //   //   setShotCounter(3);
  //   //   setPlayer1IsNext(false);
  //   // } else {
  //   //   let newScore = player2Score + p2LastTurn;
  //   //   setPlayer2Score(newScore);
  //   //   setScoreThisTurn(0);
  //   //   setShotCounter(3);
  //   //   setPlayer1IsNext(true);
  //   // }
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

  myArray1.forEach((value)=> {
          numberTiles.push(<NumberTile num={value} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click}/>)
      })

  if (showSelectUser){
    return (
      <SelectUser initiateGame={initiateGame}/>
    )
  } else { //onClick={onUndo}
    return (
      <div className='standard-board'>
          {/* commented out because cricket score is breaking it - will maybe need a seperate cricket scoreboard */}
          <div className='standard-board-first-row'><ScoreBoard playerTurn={player1IsNext} name={player1Name} score={player1Score} scoreBefore={scoreBeforeTurn} winner={player1Wins} shotCounter={shotCounter}/><Bull bull={50} onTileClick={onTileClick}/><Bull bull={25} onTileClick={onTileClick}/>  <ScoreBoard name={player2Name} playerTurn={!player1IsNext} score={player2Score} scoreBefore={scoreBeforeTurn} winner={player2Wins} shotCounter={shotCounter}/></div><div className='undo-container'><LuUndo2 onClick={onUndo}style={{fontSize: "5vw",color: "white"}}/></div> 
          
        <div className='main'><div className='game-container'>{numberTiles}</div></div>
        <div className='standard-board-first-row'><div className='miss' onClick={onMiss}> Miss </div></div>
        
      </div>
    )
  }

  
}
