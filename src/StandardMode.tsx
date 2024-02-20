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
  const [handleBustBoolean, setHandleBustBoolean] = useState<boolean>(false)
  
  useEffect(() => {
    if (player1Name && player2Name) {
      setShowSelectUser(false);
    }
  }, [player1Name, player2Name])

  useEffect(() => {
    if (shotCounter === 1 || handleBustBoolean === true) {
      let newGameState = [...gameState];
      newGameState.push([]);
      setGameState(newGameState);
      setHandleBustBoolean(false);
    }

  }, [shotCounter, handleBustBoolean])

  function initiateGame(name1: string, name2: string, player1IsFirst: boolean, custumStartingScore?: number) {
    setPlayer1Name(name1);
    setPlayer2Name(name2);
    setPlayer1IsNext(player1IsFirst)
    player1IsFirst ? playerWhoWentFirst = name1 : playerWhoWentFirst = name1;
    let newTurnCounter = turnCounter + 1;
    setTurnCounter(newTurnCounter)
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

  function incrementPositionArray(position: number) {
    let positionArrayCopy = [...positionArray];
    positionArrayCopy.push({ turn: turnCounter - 1, shot: position });
    setPositionArray(positionArrayCopy);
  }

  function setScoreThisTurnAndShotCounter(newScoreThisTurn: number, newShotCounter: number) {
    setScoreThisTurn(newScoreThisTurn);
    setShotCounter(newShotCounter); 
  }

  function switchCurrentPlayer() {
    setScoreBeforeTurn(!player1IsNext ? player1Score : player2Score) //switch whose score is held here
    setScoreThisTurnAndShotCounter(0, 3);

    let newTurnCounter = turnCounter + 1; // unsure if this is required or can i do it directly
    setTurnCounter(newTurnCounter)
    setPlayer1IsNext(!player1IsNext);
  }


  function handleDartThrown(value: number, checkoutAllowedDoubleHit: boolean = false) {
    if (player1Wins) return 0 // Game is over, return

    // Update shot counter and scoreThisTurn. Make a copy of the gameState to avoid mutating state.
    let newShotCounter = shotCounter - 1;
    const newGameState = [...gameState];
    const scoreThisTurnCopy = scoreThisTurn + value

    // handling position Array Incrementation - maybe this can be moved to a function
    const position = getPositionInShotArray(shotCounter)
    incrementPositionArray(position);
    
    // Update the Score Before check for Win or Bust.
    let nextScore = player1IsNext ? player1Score - value : player2Score - value;
    player1IsNext ? setPlayer1Score(nextScore) : setPlayer2Score(nextScore) //Can I turn this into a function?
    
    setScoreThisTurnAndShotCounter(scoreThisTurnCopy, newShotCounter);

    if (nextScore === 0 && checkoutAllowedDoubleHit) player1IsNext ? setPlayer1Wins(true) : setPlayer2Wins(true); 
    else if (nextScore === 0 && !checkoutAllowedDoubleHit || nextScore <= 1) { // BUST - reset score to before turn, and switch player
      value = -1;
      setHandleBustBoolean(true);
      player1IsNext ? setPlayer1Score(scoreBeforeTurn) : setPlayer2Score(scoreBeforeTurn);
      switchCurrentPlayer();
    }
    console.log(newGameState)
    newGameState[turnCounter - 1].push(value);
    setGameState(newGameState);

    if (newShotCounter <= 0) { // last Dart Thrown so switch player.
      switchCurrentPlayer();
    }
  }


  // I need to find out all the different  ways to end a turn this is for handleDartThrown
    // 1. Player busts
    // 2. Player checks out (wins the game)
    // 3. Player used all 3 darts
    // 
    // Ways a turn can go
    // 1. Player busts
    // 2. Player checks out (wins the game)
    // 3. Player Scores
    // 4. Player Misses

    // Thats 3 different ways to finish this. bust, checkout, out of darts.
    // out of darts, should be handled at end of function, once all logic has been covered.
    // Steps that make sense to me at the moment
    // 0. If player has Already won, return
    // 1. Check if player wins (maybe return here if they do?)
    // 2. Check if player busts (maybe return here if they do?)
    // 3. If not checked out or bust, update score, 
    // 4. Check  newShotCounter if 0, if so, reset shot counter, increment turn counter, switch player, and reset scoreThisTurn, 
    // if not updateShotCounter, and scoreThisTurn, and return to top of function.
    // Each of these could nearlu be a seperate function for clear consise flow.
    // TODO figure out when a new [] is needed, and how to always have the correct position pointer.


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
    // Need to check if the game is over, if so, return
    // If Not, need to check if the gameState is empty, if so, return

    // First Check if current player has 3 darts remaining, 
    //    if so your Undo Is Undoing the last player's turn.
    //    So Change Turn Counter - 1
    // If neither, need to check if the last turn was a bust
    // NOTE: Easiest way to check if the last turn was a bust is to check if the last value in the array is -1 by popping it off and checking it.
    // If it was, 
    // 1. I have to check what position the Bust was stored In.
        // Can Check how long the Array Is after popping the bust off to get position e.g. [10, 10, -1] => [10, 10] => arr.length = 2 so next dart position will be at 2 here.
        // [10, -1] => [10] => length = 1, position 1 is where the next dart will go
        // [-1] => [] => length = 0, position 0 is where the next dart will go
    //2. The Score has been reset after a Bust, so Ignoring the bust score of -1, I need to remove any other scores the user got this turn
        // For example score = 40 turn = [20, 10, -1], Score is reset to 40, One Undo should bring you to 10 (-20-10)
        // If you undo 2 more times from here, you are back at the 40 that you previously were at. 
        // If length is not 0, use reduce to sum each number, and remove from the score, to get the score before Bust.
        // if length is 0, leave the score as it is.
    // 3. If it is not a bust, can add the popped value back to current score, and remove the last value from the array.
    // Finally, pop off from the position array regardless of the rest.
    // Unsure from here: 
    // set shot counter to the shot counter popped off the position array? this should put you back to where you were before?
    


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
      let newTurnCounter = turnCounter + 1;
      setTurnCounter(newTurnCounter)
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
