import React from 'react'
import { GiBull } from "react-icons/gi";

interface MultipleProps {
    multiple: string;
}

export default function Multiple({multiple}: MultipleProps) {
    let style = {};
    let display:any  = <div></div>
    let displayStyle = {};
    if (multiple === '50') {
        style = {backgroundColor: "#E3292E"};
        displayStyle = {color: "black", fontSize: "2.5em", }

        display = <GiBull style={displayStyle}></GiBull>

    } else if (multiple === '25') {
        style = {backgroundColor: "#309F6A"};
        displayStyle = {color: "black", fontSize: "1.5em", }
        // display = <div style={{ textDecoration: 'underline' }}><GiBull style={displayStyle}/></div>
        display = 25
        // display = <div><div style={{ textDecoration: 'underline' }}><GiBull style={displayStyle}/></div><br/>2</div>
    }
    return (
        <div className='bull' style={style}>
            {display}
        </div>
    );
}
