import React from 'react'
import CricketCount from './CricketCount';

interface ScoreBoardProps {
    name: string;
    isCricketMode?: boolean;
    isAroundTheBoardMode?: boolean;
}

export default function ScoreBoard({name, isCricketMode=false, isAroundTheBoardMode=false}: ScoreBoardProps) {


    let scoreTile = <div>  </div>
    let cricketStyle = {width: '40vw'}

    if (isCricketMode) {
        console.log('TRUUUU')
        const myArray1: number[] = Array.from({ length: 6 }, (_, index) => index + 15);
        myArray1.reverse();
        const cricketScores: JSX.Element[] = [];
        cricketScores.push(<CricketCount num={50}/>)
        myArray1.forEach((value)=> {
            cricketScores.push(<CricketCount num={value}/>)
        })

        scoreTile = <div className='score-tile' style={cricketStyle}>
                        <div className='top-score-tile-element'>{name}</div>
                            <div className='cricket-score-container'>
                                {cricketScores}
                            </div>
                        </div>
                
    } else if(isAroundTheBoardMode) {
        scoreTile = <div className='score-tile' style={cricketStyle}>
                        <div className='top-score-tile-element'>{name}</div>
                            <div className='cricket-score-container'>
                                placeholder***
                            </div>
                        </div>
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
