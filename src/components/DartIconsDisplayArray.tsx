import React from 'react'
import { GiDart } from 'react-icons/gi'

interface DartIconsDisplayInterface{
    dartCounter: number;
}

export default function DartIconsDisplayArray({dartCounter}: DartIconsDisplayInterface) {
    let dartStyle = {fontSize: ".6em" }
    let dartStyleOff = { color:"black", fontSize: ".6em" }
    let DartArray: JSX.Element[] = [];
    if (dartCounter===3) DartArray = [<GiDart style={dartStyle}/>,<GiDart style={dartStyle}/>,<GiDart style={dartStyle}/>]
    if (dartCounter===2) DartArray = [<GiDart style={dartStyle}/>,<GiDart style={dartStyle}/>,<GiDart style={dartStyleOff}/>]
    if (dartCounter===1) DartArray = [<GiDart style={dartStyle}/>,<GiDart style={dartStyleOff}/>,<GiDart style={dartStyleOff}/>]
    if (dartCounter===0) DartArray = [<GiDart style={dartStyleOff}/>,<GiDart style={dartStyleOff}/>,<GiDart style={dartStyleOff}/>]

  return (
      <>
        {DartArray}
      </>
  )
}
