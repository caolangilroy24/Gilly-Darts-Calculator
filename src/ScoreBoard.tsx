import React from 'react'
import { GiDart } from "react-icons/gi";
import { GiBull } from "react-icons/gi";
import CricketCount from './CricketCount';




interface ScoreBoardProps {
    name: string;
    isCricketMode?: boolean;
}

export default function ScoreBoard({name, isCricketMode=false}: ScoreBoardProps) {


    let scoreTile = <div>  </div>
    if (isCricketMode) {
        const myArray1: number[] = Array.from({ length: 6 }, (_, index) => index + 15);
        myArray1.reverse();
        const cricketScores: JSX.Element[] = [];
        cricketScores.push(<CricketCount num={50}/>)
        myArray1.forEach((value)=> {
            cricketScores.push(<CricketCount num={value}/>)
        })
        let cricketStyle = {width: '40vw'}

        scoreTile = <div className='score-tile' style={cricketStyle}>
                        <div className='top-score-tile-element'>{name}</div>
                            <div className='cricket-score-container'>
                                {cricketScores}
                            </div>
                        </div>
                
        // </div>
    } else { 
        scoreTile = <div className='score-tile'>
        <div className='top-score-tile-element'>{name}
                
                </div>
                <div className='score-checkout'>Checkout:</div>
                <div className='bottom-score-tile-elements'>T20 T20 D20
                </div>
        </div>
    }

  return (
    <div className='score-tile-container'>
        {scoreTile}
        
    </div>
  )
}
