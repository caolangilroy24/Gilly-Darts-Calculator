import React from 'react'
import { GiDart } from "react-icons/gi";
import { GiBull } from "react-icons/gi";




interface ScoreBoardProps {
    name: string;
    isCricketMode?: boolean;
}

export default function ScoreBoard({name, isCricketMode=false}: ScoreBoardProps) {


    let scoreTile = <div>  </div>
    if (isCricketMode) {
    scoreTile = <div className='score-tile'>
        <div className='top-score-tile-element'>{name}
                
                </div>
                <div className='score-checkout'><GiBull/></div>
                <div className='bottom-score-tile-elements'> <GiDart/> <GiDart/> <GiDart/>
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
