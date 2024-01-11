import React, { useEffect, useState } from 'react'
import NumberTile from './NumberTile';

interface AroundTheBoardVisibleTilesProps {
    current: number;
    onTileClick?: (value: number) => void;
    onX2Click?: (value: number) => void;
    onX3Click?: (value: number) => void;
}


export default function AroundTheBoardVisibleTiles({current = 1, onTileClick, onX2Click, onX3Click}: AroundTheBoardVisibleTilesProps) {
    const [tileArray, setTileArray] = useState<JSX.Element[]>([]);

    const numArray: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
    useEffect(() => {
        let tileArrayInitial = [... tileArray];
        for (let i = current; i < current + 3; i++) {
            tileArrayInitial.push(
                <NumberTile
                    num={i}
                    isHidden={false}
                    onTileClick={onTileClick ? onTileClick : () => {}}
                    onX3Click={onX3Click ? onX3Click : () => {}}
                    onX2Click={onX2Click ? onX2Click : () => {}}
                />
            );
        }
        setTileArray(tileArrayInitial);

    
        
    }, []);
    

    return (<>
        {tileArray}
        </>
    );
}
