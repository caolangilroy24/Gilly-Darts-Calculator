import React, { useEffect, useState } from 'react'
import CricketCount from './CricketCount';
import { GiDart } from 'react-icons/gi'


interface CricketScoreBoardProps {
    name: string;
    scoreArray: {value:number, score:number}[];
    playerTurn: boolean;
    winner: boolean;
}

    
export default function CricketScoreBoard({scoreArray, name, playerTurn, winner}: CricketScoreBoardProps) {
    let cricketStyle = {width: '40vw'}
    const myArray1: number[] = Array.from({ length: 6 }, (_, index) => index + 15);
    myArray1.reverse();
    const [cricketScores, setCricketScores] = useState<JSX.Element[]>([])
    useEffect(()=> {
        let newCricketScores: JSX.Element[] = [] 
        let bullMatch = scoreArray.find((obj)=> obj.value === 50)
        newCricketScores.push(<CricketCount key='bullScore' num={50} testScore={bullMatch? bullMatch.score: 3}/>)
        myArray1.forEach((value, index) => {
            let objectMatch = scoreArray.find((obj)=> obj.value === value)
            let keyname = 'scoreFor' + value
            newCricketScores.push(<CricketCount key={keyname} num={value} testScore={objectMatch? objectMatch.score:3}/>)
        })
        setCricketScores(newCricketScores)
    }, [scoreArray])
            
    return (
    <div className='score-tile-container'>
        <div className='score-tile' style={cricketStyle}>
            <div className='top-score-tile-element'>
                {playerTurn && !winner && <div className='dart-icon-contain'><GiDart style={{fontSize: ".7em"}}/></div>}
                {winner && <p>Winner:</p>}
                {name}
                {playerTurn && !winner && <div className='dart-icon-contain'><GiDart style={{fontSize: ".7em"}}/></div>}
            </div>
            <div className='cricket-score-container'>
                {cricketScores}
            </div>
        </div>
        
    </div>
  )
}


