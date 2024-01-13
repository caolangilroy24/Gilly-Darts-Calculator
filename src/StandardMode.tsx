import React, {useState} from 'react'
import ScoreBoard from './ScoreBoard'
import NumberTile from './NumberTile'
import Bull from './Bull';

// TODO: Complete this Game Mode once the other game modes are complete.
export default function StandardMode() {
    const myArray1: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
    const numberTiles: JSX.Element[] = [];
    const [player1Score, setPlayer1Score] = useState<number>(501);
    const [player1Wins, setPlayer1Wins] = useState<boolean>(false)
    const [player2Score, setPlayer2Score] = useState<number>(501);
    const [player2Wins, setPlayer2Wins] = useState<boolean>(false)
    const [shotCounter, setShotCounter] = useState(0)
    const [player1IsNext, setPlayer1IsNext] = useState(true)
    const [scoreBeforeTurn, setScoreBeforeTurn] = useState(501);
    const [scoreThisTurn, setScoreThisTurn] = useState(0);
    
    // let possibleCheckoutsIntArray: number[] = [];
    // let possibleScoreFromOneDartIntArray: number[] = [];
    // const mostPopularCheckouts = [50, 20, 16, 18, 14, 10, 12, 8, 6, 4, 2]
    // for (let i = 0; i <= 60; i++) {
    //   if  (!possibleScoreFromOneDartIntArray.includes(i)){
    //     if (i <= 20 && !possibleScoreFromOneDartIntArray.includes(i)) {
    //       possibleScoreFromOneDartIntArray.push(i);
    //       // possibleScoreFromOneDart.push(`S${i} `)
    //     }
    //     if (i  % 2 === 0 && i <= 40 && !possibleScoreFromOneDartIntArray.includes(i)) {
    //       // possibleCheckoutsArray.push(`D${i/2}`);
    //       possibleCheckoutsIntArray.push(i);
    //       possibleScoreFromOneDartIntArray.push(i);
    //       // possibleScoreFromOneDart.push(`D${i/2}`);
    //     }
    //     if (i % 3 === 0 && !possibleScoreFromOneDartIntArray.includes(i)) {
    //       // possibleScoreFromOneDart.push(`T${i/3}`)
    //       possibleScoreFromOneDartIntArray.push(i);}
    //   }
    // }

    // possibleScoreFromOneDartIntArray.push(50);
    // possibleScoreFromOneDartIntArray.push(25)
    // console.log('possibleCheckoutsIntArray ' +possibleCheckoutsIntArray)
    // console.log('possibleScoreFromOneDartIntArray ' +possibleScoreFromOneDartIntArray)

    myArray1.reverse();

    function handleDartThrown(value: number, checkoutAllowedDoubleHit: boolean = false) {
      if (player1Wins) return 0
      let newShotCounter = shotCounter + 1;
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
        setShotCounter(0);
        setPlayer1IsNext(!player1IsNext);
      }
      if (newShotCounter >= 3){
        setScoreBeforeTurn(!player1IsNext? player1Score : player2Score)
        
        setScoreThisTurn(0);
        setShotCounter(0);
        setPlayer1IsNext(!player1IsNext);
      }

    }

    function onTileClick(value:number) {
      handleDartThrown(value)
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

    // function calculateCheckouts(currentScore: number, remainingDarts: number = 1): string[] {
    //   // const possibleCheckouts: string[] = [];
    //   let possibleCheckouts = [];
    //   if (remainingDarts === 3) {
    //     // Check if any combination of two darts from possibleScoreFromOneDartIntArray subtracted from currentScore will leave you with a score that is in mostPopularCheckouts;
    //     for (let i = 0; i < possibleScoreFromOneDartIntArray.length; i++) {
    //         for (let j = 0; j < possibleScoreFromOneDartIntArray.length; j++) {
    //             const score1 = possibleScoreFromOneDartIntArray[i];
    //             const score2 = possibleScoreFromOneDartIntArray[j];
    //             const remainingScore = currentScore - score1 - score2;
    //             if (mostPopularCheckouts.includes((remainingScore === 50)? remainingScore: remainingScore/2)) {
    //                 possibleCheckouts.push(`PossibleScores ${score1}, ${score2} Checkout${remainingScore}`);
    //             }
    //         }
    //     }
    // } else if( remainingDarts === 2) {

    //     // check if any possible score from possibleScoreFromOneDartIntArray subtracted from currentScore will leave you with a score that is in mostPopularCheckouts;
    //     possibleScoreFromOneDartIntArray.forEach((score) => {
    //       const remainingScore = currentScore - score;
    //       if (mostPopularCheckouts.includes((remainingScore === 50)? remainingScore: remainingScore/2)) {
    //         possibleCheckouts.push(`PossibleScore ${score} Checkout${remainingScore}`);
    //       }
    //     });
    //   }

    //   if (remainingDarts === 1 && (currentScore <= 40 && currentScore % 2 === 0 || currentScore === 50)) {
    //     //checkOutAvailable
    //     if (currentScore === 50) possibleCheckouts.push(`Bull`);
    //     else possibleCheckouts.push(`D${currentScore / 2}`);
    //   }

    //   return possibleCheckouts;
    // }

    // // Example usage:
    // const userScore = 60;
    //   const possibleCheckouts = calculateCheckouts(userScore, 3);
      
    //   console.log(`Possible checkouts for ${userScore}:`, possibleCheckouts);

    // myArray1.forEach((value)=> {
    //         numberTiles.push(<NumberTile num={value}/>)
    //     })
  return (
    <div className='standard-board'>
        {/* commented out because cricket score is breaking it - will maybe need a seperate cricket scoreboard */}
        <div className='standard-board-first-row'><ScoreBoard playerTurn={player1IsNext} name="Caolan" score={player1Score} scoreBefore={scoreBeforeTurn} winner={player1Wins} shotCounter={shotCounter}/><Bull bull={50} onTileClick={onTileClick}/><Bull bull={25} onTileClick={onTileClick}/>  <ScoreBoard name='Dad' playerTurn={!player1IsNext} score={player2Score} scoreBefore={scoreBeforeTurn} winner={player2Wins} shotCounter={shotCounter}/></div>
        
      <div className='main'><div className='game-container'>{numberTiles}</div></div>
        
    </div>
  )
}
