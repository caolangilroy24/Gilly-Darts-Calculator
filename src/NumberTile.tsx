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

  return (
    <div className='number-tile'>
        <div className='number-tile-container'>
            <div className='top-number-tile-element' style={style}>
                {num}
            </div>
            <div className='bottom-number-tile-elements'>
                <div className='number-tile-multiple' style={multipleStyle}>
                    X3
                </div>
                <div className='number-tile-multiple' style={multipleStyle}>
                    X2
                </div>
            </div>
        </div>
    </div>
    
  )
}
