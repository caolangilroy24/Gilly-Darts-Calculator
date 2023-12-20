import React from 'react'
import { GiBull } from "react-icons/gi";

interface BullProps {
    bull: string;
    isCricketMode?: boolean
}

export default function Bull({bull, isCricketMode=false}: BullProps) {
    let style = {};
    let display:any  = <div></div>
    let displayStyle = {};
    let bullClass = 'bull'
    if (isCricketMode) bullClass = 'cricket-bull'
    if (bull === '50') {
        style = {backgroundColor: "#E3292E"};
        displayStyle = {color: "black", fontSize: "2.5em", }

        display = <GiBull style={displayStyle}></GiBull>

    } else if (bull === '25') {
        style = {backgroundColor: "#309F6A"};
        displayStyle = {color: "black", fontSize: "1.5em", }
        // display = <div style={{ textDecoration: 'underline' }}><GiBull style={displayStyle}/></div>
        display = 25
        // display = <div><div style={{ textDecoration: 'underline' }}><GiBull style={displayStyle}/></div><br/>2</div>
    }
    return (
        <div className={bullClass} style={style}>
            {display}
        </div>
    );
}
