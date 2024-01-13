import React, {useEffect, useState} from 'react'
import CricketCount from './CricketCount';
import { GiDart } from 'react-icons/gi'


interface ScoreBoardProps {
    name: string;
    score?: number;
    shotCounter?: number;
    scoreBefore?: number;
    isCricketMode?: boolean;
    isAroundTheBoardMode?: boolean;
    scoreArray?: {value:number, score:number}[];
    playerTurn?: boolean;
    winner?: boolean;
}

export default function ScoreBoard({name, score = 501, shotCounter=3, scoreBefore, isCricketMode=false, isAroundTheBoardMode=false, scoreArray, playerTurn, winner}: ScoreBoardProps) {
    const [checkoutSuggestion, setCheckoutSuggestion] = useState<string>('')
    let possibleCheckoutsIntArray: number[] = [];
    let possibleScoreFromOneDartIntArray: number[] = [];
    const mostPopularCheckouts = [25, 20, 16, 18, 14, 10, 12, 8, 6, 4, 2]
    for (let i = 0; i <= 60; i++) {
      if  (!possibleScoreFromOneDartIntArray.includes(i)){
        if (i <= 20 && !possibleScoreFromOneDartIntArray.includes(i)) {
          possibleScoreFromOneDartIntArray.push(i);
          // possibleScoreFromOneDart.push(`S${i} `)
        }
        if (i  % 2 === 0 && i <= 40 && !possibleScoreFromOneDartIntArray.includes(i)) {
          // possibleCheckoutsArray.push(`D${i/2}`);
          possibleCheckoutsIntArray.push(i);
          possibleScoreFromOneDartIntArray.push(i);
          // possibleScoreFromOneDart.push(`D${i/2}`);
        }
        if (i % 3 === 0 && !possibleScoreFromOneDartIntArray.includes(i)) {
          // possibleScoreFromOneDart.push(`T${i/3}`)
          possibleScoreFromOneDartIntArray.push(i);}
      }
    }

    useEffect(()=> {
        console.log(3-shotCounter)
        let remainingShots = 3-shotCounter
        if (score <= 170) {
            let possibleCheckouts = calculateCheckouts(score, remainingShots);
            let checkoutSuggestion = possibleCheckouts[0];
            setCheckoutSuggestion(checkoutSuggestion)
             console.log(`Possible checkouts for ${score}:`, possibleCheckouts);

        }
    }, [score])



    possibleScoreFromOneDartIntArray.push(50);
    possibleScoreFromOneDartIntArray.push(25)
    // console.log('possibleCheckoutsIntArray ' +possibleCheckoutsIntArray)
    // console.log('possibleScoreFromOneDartIntArray ' +possibleScoreFromOneDartIntArray)


    function calculateCheckouts(currentScore: number, remainingDarts: number = 1): string[] {
        // const possibleCheckouts: string[] = [];
        console.log('remaining' + remainingDarts)
        let possibleCheckouts = [];
        let checkoutString = '';

        if (remainingDarts === 1 && (currentScore <= 40 && currentScore % 2 === 0 || currentScore === 50)) {
            //checkOutAvailable
            if (currentScore === 50) possibleCheckouts.push(`Bull`);
            else possibleCheckouts.push(`D${currentScore / 2}`);
        }

        if (remainingDarts === 3) {
          // Check if any combination of two darts from possibleScoreFromOneDartIntArray subtracted from currentScore will leave you with a score that is in mostPopularCheckouts;
          for (let i = 0; i < possibleScoreFromOneDartIntArray.length; i++) {
              for (let j = 0; j < possibleScoreFromOneDartIntArray.length; j++) {
                  const score1 = possibleScoreFromOneDartIntArray[i];
                  const score2 = possibleScoreFromOneDartIntArray[j];
                  const remainingScore = currentScore - score1 - score2;
                  console.log('remainingScore ' + remainingScore)

                  if (remainingScore !== 50) checkoutString = 'D'
                  if (mostPopularCheckouts.includes((remainingScore === 50)? remainingScore: remainingScore/2)) {
                      possibleCheckouts.push(`${score1}, ${score2} ${checkoutString}${remainingScore}`);
                  }
              }
          }
      } else if( remainingDarts === 2) {
  
          // check if any possible score from possibleScoreFromOneDartIntArray subtracted from currentScore will leave you with a score that is in mostPopularCheckouts;
          possibleScoreFromOneDartIntArray.forEach((score) => {
            const remainingScore = currentScore - score;
            console.log('remainingScore ' + remainingScore)
            if (remainingScore !== 50) {
               checkoutString = 'D'
            }
            if (mostPopularCheckouts.includes((remainingScore === 50)? remainingScore: remainingScore/2)) {
              possibleCheckouts.push(` ${score} ${checkoutString}${remainingScore/2}`);
            }
          });
        }
        
        return possibleCheckouts;
      }
  
      // Example usage:
    //   const userScore = 70;
    //     const possibleCheckouts = calculateCheckouts(userScore, 3);
        
        // setCheckoutSuggestion()
  



    let scoreTile = <div>  </div>
    let aroundBoardStyle = {width: '40vw'}
    
    if(isAroundTheBoardMode) {
        scoreTile = <div className='score-tile' style={aroundBoardStyle}>
                        <div className='top-score-tile-element'>
                        {playerTurn && !winner && <div className='dart-icon-contain'><GiDart style={{fontSize: ".7em"}}/></div>}
                            {winner && <p>Winner:</p>}
                            {name}
                            {playerTurn && !winner && <div className='dart-icon-contain'><GiDart style={{fontSize: ".7em"}}/></div>}
                        
                        </div>
                            <div className='cricket-score-container'>
                                placeholder***
                            </div>
                        </div>
    } else { 
        scoreTile = <div className='score-tile'>
        <div className='top-score-tile-element'>
            {playerTurn && !winner && <div className='dart-icon-contain'><GiDart style={{fontSize: ".7em"}}/></div>}
                {winner && <p>Winner:</p>}

                {name} - {score}
                {/* <br></br>Score Before: {scoreBefore} */}
            {playerTurn && !winner && <div className='dart-icon-contain'><GiDart style={{fontSize: ".7em"}}/></div>}
                
                </div>
                <div className='score-checkout'>Checkout:</div>
                <div className='bottom-score-tile-elements'>{checkoutSuggestion}
                </div>
        </div>
    }

  return (
    <div className='score-tile-container'>
        {scoreTile}
        
    </div>
  )
}
