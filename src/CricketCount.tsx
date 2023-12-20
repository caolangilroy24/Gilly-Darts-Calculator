import React from 'react'
import { GiDart } from "react-icons/gi";
import { GiBull } from "react-icons/gi";

interface CricketCountProps {
    num: number;
}


export default function CricketCount({num}: CricketCountProps) {
    let output = <div></div>
    if (num === 50) {
        // var colour = "#E3292E"
        let bullStyle = {fontSize: "1.5em" }

        output = <GiBull style={bullStyle}/>
    } else {
        // var colour = "#309F6A"
        output = <div style={{fontSize:"1.5em"}}>{num}</div>
    }
    let dartStyle = {fontSize: ".6em" }
  return (
        <div className='cricket-count-down-element'>
        <div className='cricket-score-count'>
            {output}
        </div>
        <div className='bottom-cricket-tile-elements'>
            <GiDart style={dartStyle}/><GiDart style={dartStyle}/> <GiDart style={dartStyle}/>
        </div>
    </div>
    
  )
}
