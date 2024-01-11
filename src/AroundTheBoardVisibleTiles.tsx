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
        for (current; current < current + 3; current++) {
            tileArrayInitial.push(
                <NumberTile
                    num={current}
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
