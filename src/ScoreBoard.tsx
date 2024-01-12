import React from 'react'
import CricketCount from './CricketCount';
import { GiDart } from 'react-icons/gi'


interface ScoreBoardProps {
    name: string;
    score?: number;
    isCricketMode?: boolean;
    isAroundTheBoardMode?: boolean;
    scoreArray?: {value:number, score:number}[];
    playerTurn?: boolean;
    winner?: boolean;
}

export default function ScoreBoard({name, score, isCricketMode=false, isAroundTheBoardMode=false, scoreArray, playerTurn, winner}: ScoreBoardProps) {

    let scoreTile = <div>  </div>
    let aroundBoardStyle = {width: '40vw'}
    
    if(isAroundTheBoardMode) {
        scoreTile = <div className='score-tile' style={aroundBoardStyle}>
                        <div className='top-score-tile-element'>
                        {playerTurn && !winner && <div className='dart-icon-contain'><GiDart style={{fontSize: ".7em"}}/></div>}
                            {winner && <p>Winner:</p>}
                            {name}
                            {playerTurn && !winner && <div className='dart-icon-contain'><GiDart style={{fontSize: ".7em"}}/></div>}
                        
                        </div>
                            <div className='cricket-score-container'>
                                placeholder***
                            </div>
                        </div>
    } else { 
        scoreTile = <div className='score-tile'>
        <div className='top-score-tile-element'>{name} - {score}
                
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
