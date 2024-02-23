import { GiBull } from "react-icons/gi";
import DartIconsDisplayArray from '../../components/DartIconsDisplayArray';

interface CricketCountProps {
    num: number;
    dartCounter: number;
}

export default function CricketCount({num, dartCounter=3}: CricketCountProps) {
    let output = <div></div>

    if (num === 50) {
        let bullStyle = {fontSize: "1.5em" }
        output = <GiBull style={bullStyle}/>
    } else {
        output = <div style={{fontSize:"1.5em"}}>{num}</div>
    }

  return (
        <div className='cricket-count-down-element'>
        <div className='cricket-score-count'>
            {output}
        </div>
        <div className='bottom-cricket-tile-elements'>
            <DartIconsDisplayArray dartCounter={dartCounter}/>
        </div>
    </div>
    
  )
}
