import React, { useEffect, useState } from 'react'
import NumberTile from '../../components/NumberTile';

interface AroundTheBoardVisibleTilesProps {
    current: number;
    onTileClick?: (value: number) => void;
    onX2Click?: (value: number) => void;
    onX3Click?: (value: number) => void;
}


export default function AroundTheBoardVisibleTiles({current = 1, onTileClick, onX2Click, onX3Click}: AroundTheBoardVisibleTilesProps) {
    // const [tileArray, setTileArray] = useState<JSX.Element[]>([]);
    let isCurrentPlusTwoOverTwenty = (current + 2) > 20
    let isCurrentPlusOneOverTwenty = (current + 1) > 20
    let isCurrentOverTwenty = current > 20
    // useEffect(() => {
    //     let tileArrayInitial = [... tileArray];
    //     for (let i = current; i < current + 3; i++) {
    //         tileArrayInitial.push(
    //             <NumberTile
    //                 num={i}
    //                 isHidden={false}
    //                 onTileClick={onTileClick ? onTileClick : () => {}}
    //                 onX3Click={onX3Click ? onX3Click : () => {}}
    //                 onX2Click={onX2Click ? onX2Click : () => {}}
    //             />
    //         );
    //     }
    //     setTileArray(tileArrayInitial);

    
        
    // }, [current, onTileClick]);
    

    return (
        <>
            {/* {tileArray} */}
            <NumberTile
                num={current}
                isHidden={isCurrentOverTwenty}
                onTileClick={onTileClick ? onTileClick : () => {}}
                onX3Click={onX3Click ? onX3Click : () => {}}
                onX2Click={onX2Click ? onX2Click : () => {}}
            />
            <NumberTile
                num={current + 1}
                isHidden={isCurrentPlusOneOverTwenty}
                onTileClick={onTileClick ? onTileClick : () => {}}
                onX3Click={onX3Click ? onX3Click : () => {}}
                onX2Click={onX2Click ? onX2Click : () => {}}
            />
            <NumberTile
                num={current + 2}
                isHidden={isCurrentPlusTwoOverTwenty}
                onTileClick={onTileClick ? onTileClick : () => {}}
                onX3Click={onX3Click ? onX3Click : () => {}}
                onX2Click={onX2Click ? onX2Click : () => {}}
            />
        </>
    );
}
