import React, {useEffect, useState} from 'react'
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
    let possibleScoreWithoutMultiplesOrBull: number[] = [];
    const mostPopularCheckouts = [20, 16, 18, 25]; // 18, 14, 8, 6, 4, 2]14, 10, 12, 8, 6, 4, 2
    const [useExtraDart, setUseExtraDart] = useState(false);
    for (let i = 60; i >= 1; i--) {
      if  (!possibleScoreFromOneDartIntArray.includes(i)){
        if (i <= 20 && !possibleScoreFromOneDartIntArray.includes(i)) {
          possibleScoreFromOneDartIntArray.push(i);
          possibleScoreWithoutMultiplesOrBull.push(i);
        }
        if (i  % 2 === 0 && i <= 40 && !possibleScoreFromOneDartIntArray.includes(i)) {
          possibleCheckoutsIntArray.push(i);
          possibleScoreFromOneDartIntArray.push(i);
        }
        if (i % 3 === 0 && !possibleScoreFromOneDartIntArray.includes(i)) {
          possibleScoreFromOneDartIntArray.push(i);}
      }
    }
    

    useEffect(()=> {
        if (score <= 170) {
            let possibleCheckouts = calculateCheckouts(score, shotCounter);
            if (possibleCheckouts) {
              let checkoutSuggestion = possibleCheckouts[0];
              setCheckoutSuggestion(checkoutSuggestion)
            } else {
              setCheckoutSuggestion('')
            }
        }
    }, [score, useExtraDart])

    possibleScoreFromOneDartIntArray.push(50);
    possibleScoreFromOneDartIntArray.push(25)
    
    function isPreferredCheckout(score: number): boolean {
      if (mostPopularCheckouts.includes(score/2)) {
        return true;
      } else {
        return false;
      }
    }

    function isNotPreferredCheckout(score: number): boolean {
      if (score <= 40 && score % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }

    function handleExtraDartRequest() {
      setUseExtraDart(!useExtraDart)
    }

    function convertScoreToDartsDisplay(score: number, isCheckout=false): string {
      if (isCheckout) {
        if (score === 50) {
          return 'Bull'
        } else {
          return `D${score/2}`
        }
      } else {
        if (score === 50) {
          return 'Bull'
        } else if (score > 20 && score % 3 === 0) {
          return `T${score/3}`
        } else if (score > 20 && score % 2 === 0) {
          return `D${score/2}`
        }  else {
          return `S${score}`
        }
      }
      
    }

    function possibleTwoDartFinishes(currentScore: number): string[] {
      // check if any possible score from possibleScoreFromOneDartIntArray subtracted from currentScore will leave you with a score that is in mostPopularCheckouts;
        let checkoutString = '';
        let possibleCheckouts: string[] = []
        let possibleFromOneDart: number[] = []
        if (currentScore <= 80) {
          possibleFromOneDart = possibleScoreWithoutMultiplesOrBull;
        } else {
          possibleFromOneDart = possibleScoreFromOneDartIntArray;
        }

        possibleFromOneDart.forEach((score) => {
          
          const remainingScore = currentScore - score;
          const secondLastDartString = convertScoreToDartsDisplay(score);
          if (isPreferredCheckout(remainingScore)) {
            checkoutString = convertScoreToDartsDisplay(remainingScore, true);
            possibleCheckouts.push(` ${secondLastDartString} ${checkoutString}`);
          }
        });
        return possibleCheckouts;
      }

      function possibleThreeDartFinishes(currentScore: number): string[] {
        let possibleCheckouts: string[] = []
        let possibleFromOneDart: number[] = []
        if (currentScore <= 80) {
          possibleFromOneDart = possibleScoreWithoutMultiplesOrBull;
        } else {
          possibleFromOneDart = possibleScoreFromOneDartIntArray;
        }

            // Check if any combination of two darts from possibleScoreFromOneDartIntArray subtracted from currentScore will leave you with a score that is in mostPopularCheckouts;
            for (let i = 0; i < possibleFromOneDart.length; i++) {
                for (let j = 0; j < possibleFromOneDart.length; j++) {
                    const score1 = possibleFromOneDart[i];
                    const score2 = possibleFromOneDart[j];
                    const secondLastDartString = convertScoreToDartsDisplay(score2);
                    const thirdLastDartString = convertScoreToDartsDisplay(score1);
                    const remainingScore = currentScore - score1 - score2;
                    if (isPreferredCheckout(remainingScore)) {
                      const checkoutString = convertScoreToDartsDisplay(remainingScore, true);
                      possibleCheckouts.push(`${thirdLastDartString}, ${secondLastDartString} ${checkoutString}`);
                    }
                }
            }
            return possibleCheckouts;
      }

      function calculateCheckouts(currentScore: number, shotCount: number = 1): string[] {
        let possibleCheckouts: string[] = [];
        
        if (isPreferredCheckout(currentScore)) {
          let checkoutString = '';
          checkoutString = convertScoreToDartsDisplay(currentScore, true);
          possibleCheckouts.push(`${checkoutString}`);
        } else if (isNotPreferredCheckout(currentScore) && useExtraDart && shotCount > 1){
            possibleCheckouts = possibleTwoDartFinishes(currentScore);
        } else if (isNotPreferredCheckout(currentScore)){
          possibleCheckouts.push(`D${currentScore/2}`);
        } else {
          possibleCheckouts = possibleTwoDartFinishes(currentScore);
          if (possibleCheckouts.length === 0 || useExtraDart) {
            possibleCheckouts = possibleThreeDartFinishes(currentScore);
          } 
        }
      return possibleCheckouts
    }

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
            {playerTurn && !winner && <div className='dart-icon-contain'><GiDart style={{fontSize: ".7em"}}/></div>}
                
                </div>
                <div className='score-checkout'>Checkout: <button onClick={handleExtraDartRequest}>use extra dart</button></div>
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
