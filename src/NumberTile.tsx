import { on } from 'events';
import React from 'react'

interface NumberTileProps {
    num: number;
}

export default function NumberTile({num}: NumberTileProps) {
    
    if (num % 2 == 0) {
        var colour = "#000000"
        var multipleColour = "#E3292E"
    } else {
        var colour = "#F9DFBC"
        var multipleColour = "#309F6A"
    }
    const style = { backgroundColor: colour, fontSize: "3rem" }
    const multipleStyle = { backgroundColor: multipleColour, fontSize: "1.5rem" }
    function onClick() {
        console.log(num)
    }

    function onClickX2() {
        console.log(num*2)
    }
    function onClickX3() {
        console.log(num*3)
    }
  return (
    <div className='number-tile'>
        <div className='number-tile-container'>
            <div className='top-number-tile-element' style={style} onClick={onClick}>
                {num}
            </div>
            <div className='bottom-number-tile-elements'>
                <div className='number-tile-multiple' style={multipleStyle} onClick={onClickX3}>
                    X3
                </div>
                <div className='number-tile-multiple' style={multipleStyle} onClick={onClickX2}>
                    X2
                </div>
            </div>
        </div>
    </div>
    
  )
}
