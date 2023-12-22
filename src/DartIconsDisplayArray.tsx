import React from 'react'
import { GiDart } from 'react-icons/gi'

interface DartIconsDisplayInterface{
    remaining: boolean[];
    testScore: number;
}

export default function DartIconsDisplayArray({remaining, testScore}: DartIconsDisplayInterface) {
    let dartStyle = {fontSize: ".6em" }
    let dartStyleOff = { color:"black", fontSize: ".6em" }
    // remaining = [true, true, true]
    let DartArray: JSX.Element[] = [];
    if (testScore===3) DartArray = [<GiDart style={dartStyle}/>,<GiDart style={dartStyle}/>,<GiDart style={dartStyle}/>]
    if (testScore===2) DartArray = [<GiDart style={dartStyle}/>,<GiDart style={dartStyle}/>,<GiDart style={dartStyleOff}/>]
    if (testScore===1) DartArray = [<GiDart style={dartStyle}/>,<GiDart style={dartStyleOff}/>,<GiDart style={dartStyleOff}/>]
    if (testScore===0) DartArray = [<GiDart style={dartStyleOff}/>,<GiDart style={dartStyleOff}/>,<GiDart style={dartStyleOff}/>]
    
    // remaining.forEach((value)=> {
    //     // if (value === true) DartArray.push(<GiDart style={dartStyle}/>)
    //     // else if (value === false) DartArray.push(<GiDart style={dartStyleOff}/>)
    //     DartArray.push(value? <GiDart style={dartStyle}/>: <GiDart style={dartStyleOff}/>)
    // })

  return (
    <div className='bottom-cricket-tile-elements'>
        {/* <GiDart style={dartStyle}/><GiDart style={dartStyle}/> <GiDart style={dartStyle}/> */}
        {DartArray}
        {/* test */}
    </div>
  )
}
