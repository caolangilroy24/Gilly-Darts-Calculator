import React from 'react'
import { GiDart } from "react-icons/gi";
import { GiBull } from "react-icons/gi";
import DartIconsDisplayArray from './DartIconsDisplayArray';

interface CricketCountProps {
    num: number;
    // remaining: boolean[];
    testScore: number;
}


export default function CricketCount({num, testScore=3}: CricketCountProps) {
    let output = <div></div>
    let dartIconArray: JSX.Element[] = []
    let remaining = [true, true, true]
    console.log('DEBUG')
    console.log(num)
    console.log(testScore)
    if (testScore===3) remaining = [true, true, true]
    else if (testScore===2) remaining = [true, true, false]
    else if (testScore===1) remaining = [true, false, false]
    else if (testScore===0) remaining = [false, false, false]
    console.log(remaining)
    // remaining.forEach((_, index)=> {
    //     console.log('DEBUG')
    //     console.log(num)
    //     console.log(index)
    //     console.log(testScore)
    //     if (index >= testScore) remaining[index] = false
    // })
    // for (let i=0; i<testScore; i++) {
    //     // dartIconArray.push(<GiDart style={{fontSize: ".6em" }}/>)
    // }
    if (num === 50) {
        // var colour = "#E3292E"
        let bullStyle = {fontSize: "1.5em" }

        output = <GiBull style={bullStyle}/>
    } else {
        // var colour = "#309F6A"
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
