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
    const initialScores = Array.from({ length: 6 }, (_, index) =>  ( {value: (index + 15), score: 3}));
    
    const [scoreArray, setScore ] = useState<ScoreObject[]>([...initialScores, {value:50, score:3}] );
    const myArray1: number[] = Array.from({ length: 6 }, (_, index) => index + 15);
    const numberTiles: JSX.Element[] = [];
    // Bull needed to be added to scoreArray
    useEffect(() => {
      const initialScoreArray = Array.from({ length: 6 }, (_, index) =>  ( {value: (index + 15), score: 3}))
      setScore([...scoreArray, {value: 50, score: 3}])
    }, [])
    // const addBullToScoreArray = [...scoreArray, {value: 50, score: 3}]
    // setScore([...scoreArray, {value: 50, score: 3}])
    myArray1.reverse();
    function onTileClick(num: number) {
        let scoreArrayCopy: ScoreObject[] = [... scoreArray]
        let matchingObject = scoreArrayCopy.find((obj)=> obj.value === num)
        if (matchingObject && matchingObject.score > 0) {
          console.log('before:')

          console.log(matchingObject.score)
          matchingObject.score = matchingObject.score - 1
          console.log(matchingObject.score)
          
        }
        setScore(scoreArrayCopy)
        console.log(scoreArrayCopy)

    }

    function onX3Click(num: number) {
      let scoreArrayCopy: ScoreObject[] = [... scoreArray]
      let matchingObject = scoreArrayCopy.find((obj)=> obj.value === num)
      if (matchingObject && matchingObject.score > 0) matchingObject.score = matchingObject.score - 3
      setScore(scoreArrayCopy)
      console.log(scoreArrayCopy)

    }

    function onX2Click(num: number) {
      let scoreArrayCopy: ScoreObject[] = [... scoreArray]
      let matchingObject = scoreArrayCopy.find((obj)=> obj.value === num)
      if (matchingObject && matchingObject.score > 0) matchingObject.score = matchingObject.score - 2
      setScore(scoreArrayCopy)
      console.log(scoreArrayCopy)
    }

    myArray1.forEach((value)=> {
            numberTiles.push(<NumberTile num={value} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click}/>)
        })

    // let bullStyle = {height: 30vh}};


    
  return (
    <div className='standard-board'>
        <div className='standard-board-first-row'><CricketScoreBoard key='Player 1' name="Caolan" scoreArray={scoreArray}/> <CricketScoreBoard key='Player 2' name='Dad' scoreArray={scoreArray}/></div>
      <div className='main'><div className='game-container'><Bull isCricketMode={true} bull={50} onX2Click={onX2Click}/><Bull isCricketMode={true} bull={25} onTileClick={onTileClick}/>{numberTiles}</div></div>
    </div>
  )
}
