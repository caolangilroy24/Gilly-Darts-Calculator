import React from 'react'
import { GiDart } from "react-icons/gi";
import { GiBull } from "react-icons/gi";
import DartIconsDisplayArray from './DartIconsDisplayArray';

interface CricketCountProps {
    num: number;
    testScore: number;
}


export default function CricketCount({num, testScore=3}: CricketCountProps) {
    let output = <div></div>
    let remaining = [true, true, true]
    if (testScore===3) remaining = [true, true, true]
    else if (testScore===2) remaining = [true, true, false]
    else if (testScore===1) remaining = [true, false, false]
    else if (testScore===0) remaining = [false, false, false]

    if (num === 50) {
        let bullStyle = {fontSize: "1.5em" }
        output = <GiBull style={bullStyle}/>
    } else {
        output = <div style={{fontSize:"1.5em"}}>{num}</div>
    }

  return (
        <div className='cricket-count-down-element'>
        <div className='cricket-score-count'>
            {output}
        </div>
        <DartIconsDisplayArray remaining={remaining} testScore={testScore}/>
       
    </div>
    
  )
}
