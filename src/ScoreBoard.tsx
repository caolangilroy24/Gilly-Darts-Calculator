import React from 'react'


interface ScoreBoardProps {
    name: string;
}

export default function ScoreBoard({name}: ScoreBoardProps) {
  return (
    <div className='score-tile-container'>
        <div className='score-tile'>
            <div className='top-score-tile-element'>Caolan
                
            </div>
            <div className='score-checkout'>Checkout:</div>
            <div className='bottom-score-tile-elements'>T20 T20 D20
            </div>
        </div>
    </div>
  )
}
