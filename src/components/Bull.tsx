import { GiBull } from "react-icons/gi";

interface BullProps {
    bull: number;
    isCricketMode?: boolean
    onTileClick?: (value: number) => void;
    onX2Click?: (value: number) => void;
}

export default function Bull({bull, isCricketMode=false, onTileClick = () => {}, onX2Click = () => {}}: BullProps) {
    const handleOnClick = () => {
        if (isCricketMode) {
            if (bull === 50) onX2Click(50)
            else if (bull === 25) onTileClick(50)
        } else {
            onTileClick(bull)
        }
    }

    let style = {};
    let display:any  = <div></div> //this is a hack to get around the fact that display can be a number or a react icon I will fix this later
    let displayStyle = {};
    let bullClass = 'bull'
    if (isCricketMode) bullClass = 'cricket-bull'

    if (bull === 50) {
        style = {backgroundColor: "#E3292E"};
        displayStyle = {color: "black", fontSize: "2.5em", }
        display = <GiBull style={displayStyle}></GiBull>
    } else if (bull === 25) {
        style = {backgroundColor: "#309F6A"};
        displayStyle = {color: "black", fontSize: "1.5em", }
        display = 25
    }
    return (
        <div key={bull} className={bullClass} style={style} onClick={handleOnClick}>
            {display}
        </div>
    );
}
