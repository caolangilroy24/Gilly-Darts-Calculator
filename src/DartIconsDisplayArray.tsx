import React from 'react'
import { GiDart } from 'react-icons/gi'

interface DartIconsDisplayInterface{
    testScore: number;
}

export default function DartIconsDisplayArray({testScore}: DartIconsDisplayInterface) {
    let dartStyle = {fontSize: ".6em" }
    let dartStyleOff = { color:"black", fontSize: ".6em" }
    let DartArray: JSX.Element[] = [];
    if (testScore===3) DartArray = [<GiDart style={dartStyle}/>,<GiDart style={dartStyle}/>,<GiDart style={dartStyle}/>]
    if (testScore===2) DartArray = [<GiDart style={dartStyle}/>,<GiDart style={dartStyle}/>,<GiDart style={dartStyleOff}/>]
    if (testScore===1) DartArray = [<GiDart style={dartStyle}/>,<GiDart style={dartStyleOff}/>,<GiDart style={dartStyleOff}/>]
    if (testScore===0) DartArray = [<GiDart style={dartStyleOff}/>,<GiDart style={dartStyleOff}/>,<GiDart style={dartStyleOff}/>]

  return (
    <div className='bottom-cricket-tile-elements'>
        {DartArray}
    </div>
  )
}
