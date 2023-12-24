import React from 'react'
import CricketCount from './CricketCount';

interface ScoreBoardProps {
    name: string;
    isCricketMode?: boolean;
    isAroundTheBoardMode?: boolean;
    scoreArray?: {value:number, score:number}[];
    // testScoreArray: object[];
}

export default function ScoreBoard({name, isCricketMode=false, isAroundTheBoardMode=false, scoreArray}: ScoreBoardProps) {

    let scoreTile = <div>  </div>
    let aroundBoardStyle = {width: '40vw'}
    
    if(isAroundTheBoardMode) {
        scoreTile = <div className='score-tile' style={aroundBoardStyle}>
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
