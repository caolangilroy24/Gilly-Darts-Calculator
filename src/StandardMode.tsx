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
    //quickdebugconsole.log(myArray1)
    myArray1.reverse();
    //quickdebugconsole.log(myArray1)

    function handleDartThrown(value: number, checkoutAllowedDoubleHit: boolean = false) {
      if (player1Wins) return 0
      console.log('\n\n\n==========shotCounter ' +shotCounter)
      console.log('player1IsNext ' +player1IsNext)
      console.log('player1Score ' +player1Score)
      console.log('player2Score ' +player2Score)

      // if (shotCounter === 0) {
      //   console.log('\n@@@@@@@@@@@SetScoreBeforeTurn is being Called')
      //   setScoreBeforeTurn(player1IsNext? player1Score : player2Score)
      // }
      console.log('scorebeforeTurn ' +scoreBeforeTurn)

      let newShotCounter = shotCounter + 1;
      console.log(newShotCounter)
      setShotCounter(newShotCounter);
      // console.log("\n\n\nhandleDart clicked")
      // console.log('newShotCounter ' +newShotCounter)
      // console.log(value)
      // console.log(scoreThisTurn)
      const scoreThisTurnCopy = scoreThisTurn + value
      setScoreThisTurn(scoreThisTurnCopy);
      console.log('scoreThisTurn ' +scoreThisTurnCopy)
      let nextScore = player1IsNext? player1Score - value : player2Score - value;
      player1IsNext? setPlayer1Score(nextScore) : setPlayer2Score(nextScore)
      if (nextScore === 0 && checkoutAllowedDoubleHit) player1IsNext? setPlayer1Wins(true) : setPlayer2Wins(true);
      else if (nextScore === 0 && !checkoutAllowedDoubleHit || nextScore < 0) {
        console.log('\n\n\n\n@@@@@@@@@@@@bust')
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
      // if (player1Wins) return 0

      // console.log("tile clicked")
      // console.log(value)
      // let nextScore = player1Score - value
      // setPlayer1Score(nextScore)
      // if (nextScore === 0) setPlayer1Wins(true)
      handleDartThrown(value)

      //quickdebugconsole.log("tile clicked")
    }

  function onX3Click(value:number) {
    console.log("x3 clicked")
    handleDartThrown(value*3)
      // console.log(value*3)
      // setPlayer1Score(player1Score - (value*3))
    //quickdebugconsole.log("tile clicked")
  }

  function onX2Click(value:number) {
    console.log("x2 clicked")
      // console.log(value*2)
      // setPlayer1Score(player1Score - (value*2))
      handleDartThrown(value * 2, true)
    //quickdebugconsole.log("tile clicked")
    }

  myArray1.forEach((value)=> {
          numberTiles.push(<NumberTile num={value} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click}/>)
      })

    // myArray1.forEach((value)=> {
    //         numberTiles.push(<NumberTile num={value}/>)
    //     })
  return (
    <div className='standard-board'>
        {/* commented out because cricket score is breaking it - will maybe need a seperate cricket scoreboard */}
        <div className='standard-board-first-row'><ScoreBoard playerTurn={player1IsNext} name="Caolan" score={player1Score} scoreBefore={scoreBeforeTurn} winner={player1Wins}/><Bull bull={50} onTileClick={onTileClick}/><Bull bull={25} onTileClick={onTileClick}/>  <ScoreBoard name='Dad' playerTurn={!player1IsNext} score={player2Score} scoreBefore={scoreBeforeTurn} winner={player2Wins}/></div>
        
      <div className='main'><div className='game-container'>{numberTiles}</div></div>
        
    </div>
  )
}
