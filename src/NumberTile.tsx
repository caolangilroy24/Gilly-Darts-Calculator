import { on } from 'events';
import React from 'react'

interface NumberTileProps {
    num: number;
    isHidden?: boolean
    onTileClick: (num: number)=>void
    onX2Click: (num: number)=>void
    onX3Click: (num: number)=>void

}


export default function NumberTile({num, isHidden = false, onTileClick = () => {}, onX2Click = () => {}, onX3Click = () => {} }: NumberTileProps) {
    if (isHidden) return null;
    const handleTileClick = () => {
        onTileClick(num)
    }

    const handleX3Click = () => {
        onX3Click(num)
    }

    const handleX2Click = () => {
        onX2Click(num)
    }
    
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
    <div key={num} id={num.toString()} className='number-tile'>
        <div className='number-tile-container'>
            <div className='top-number-tile-element' style={style} onClick={handleTileClick}>
                {num}
            </div>
            <div className='bottom-number-tile-elements'>
                <div className='number-tile-multiple' style={multipleStyle} onClick={handleX3Click}>
                    X3
                </div>
                <div className='number-tile-multiple' style={multipleStyle} onClick={handleX2Click}>
                    X2
                </div>
            </div>
        </div>
    </div>
    
  )
}
