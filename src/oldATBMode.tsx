import React from 'react'

export default function oldATBMode() {
  return (
    <div>oldATBMode</div>
  )
}


// import React, { useEffect, useState } from 'react'
// import NumberTile from './NumberTile';
// import ScoreBoard from './ScoreBoard';
// import { version } from 'os';

// export default function AroundTheBoardMode() {
//     let numberArray: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
//     // const [player1Position, setPlayer1Postiion]= useState(0);
//     // const [player2Position, setPlayer2Postiion]= useState(0);
//     // const [player1TileArray, setP1TileArray] = useState<JSX.Element[]>([]);
//     // const [player2TileArray, setP2TileArray] = useState<JSX.Element[]>([]);
//     // const [player1VisibleTiles, setP1VisibleTiles] = useState<number[]>([1,2,3])
//     // const [player2VisibleTiles, setP2VisibleTiles] = useState<number[]>([1,2,3])
//     const [player1Tiles, setP1Tiles] = useState(new Array(20).fill(false).fill(true, 0, 3));
//     const [player2Tiles, setP2Tiles] = useState(new Array(20).fill(false).fill(true, 0, 3));
//     const [currentPlayer, setCurrentPlayer] = useState(1)
//     const [shotCounter, setShotCounter] = useState(0);
//     const [player1IsNext, setPlayer1IsNext] = useState<boolean>(true);
    
//     // useEffect(() => {
//     //     let tilesArray: JSX.Element[] = [];
//     //     numberArray.forEach((value, index)=> {
//     //         const isVisible = player1VisibleTiles.includes(value)
//     //         tilesArray.push(<NumberTile num={value} isHidden={!isVisible} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click}/>)
//     //     })
//     //     setP1TileArray(tilesArray)
//     // }, [player1VisibleTiles])

//     // useEffect(() => {
//     //     let tilesArray: JSX.Element[] = [];
//     //     numberArray.forEach((value, index)=> {
//     //         const isVisible = player2VisibleTiles.includes(value)
//     //         tilesArray.push(<NumberTile num={value} isHidden={!isVisible} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click}/>)
//     //     })
//     //     setP2TileArray(tilesArray)
//     // }, [player2VisibleTiles])

//     function onTileClick(index: number) {
//             if (shotCounter >= 2) {
//                 console.log('shotCounter >= 2')
//                 setShotCounter(0);
//                 setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
//                 setPlayer1IsNext(!player1IsNext);
//             }
//             else {
//                 console.log('shotCounter < 2')
//                 setShotCounter(shotCounter + 1);

//             }
//         const newTiles = currentPlayer === 1 ? [...player1Tiles] : [...player2Tiles];
//         const firstVisibleIndex = newTiles.findIndex(tile => tile === true)
//         if (index === firstVisibleIndex) {
//             newTiles.shift()
//             newTiles[index] = false;
//             newTiles[3]= true;
//             console.log(newTiles[index])
//             if (newTiles.length > index +1){
//                 newTiles[2] = true;
//             }
//             currentPlayer === 1 ? setP1Tiles(newTiles) : setP2Tiles(newTiles);

//         }
        


//       }

//     // function onTileClick(num: number) {
//     //     let playerPositionCopy = player1IsNext? player1Position: player2Position;
//     //     playerPositionCopy = playerPositionCopy + 1  
//     //     player1IsNext? setPlayer1Postiion(playerPositionCopy) : setPlayer2Postiion(playerPositionCopy)
//     //     console.log('player1PositionCopy ' +playerPositionCopy)
//     //     // console.log('num ' +num)
//     //     console.log('shotCounter' + shotCounter )
//     //     console.log(shotCounter >= 2)
//     //     let nextPlayer1IsNext = player1IsNext;
//     //     let nextShotCounter = shotCounter;
//     //     if (shotCounter >= 2) {
//     //         nextShotCounter = 0;
//     //         nextPlayer1IsNext = !player1IsNext
//     //         setShotCounter(nextShotCounter)
//     //         setPlayer1IsNext(nextPlayer1IsNext)
//     //         //quickdebugconsole.log(`after 3: ${shotCounter}`)
//     //       } else {
//     //         nextShotCounter = shotCounter + 1
//     //         setShotCounter(nextShotCounter)
    
//     //       }
//     //     console.log('\n\nnum ' + num)
//     //     console.log('player1IsNext ' + player1IsNext)
//     //     console.log('player1VisibleTiles[0] ' + player1VisibleTiles[0])
//     //     console.log('player2VisibleTiles[0] ' + player2VisibleTiles[0])
//     //     if (num === (nextPlayer1IsNext? player1VisibleTiles[0]: player2VisibleTiles[0] )) {
//     //         console.log('is it getting here?')
//     //         let visibleTilesCopy = nextPlayer1IsNext? [...player1VisibleTiles] : [...player2VisibleTiles]
//     //         visibleTilesCopy.push(num + 3)
//     //         visibleTilesCopy = visibleTilesCopy.filter((tileNum)=> tileNum != num)
//     //         nextPlayer1IsNext? setP1VisibleTiles(visibleTilesCopy): setP2VisibleTiles(visibleTilesCopy)
//     //     }
        


//     //   }
  
//     function onX3Click() {
//       //quickdebugconsole.log("X3 clicked")
//       }
  
//     function onX2Click() {
//       //quickdebugconsole.log("X2 clicked")
//       }
// const tilesArray = currentPlayer === 1 ? player1Tiles : player2Tiles;
//   return (
//     <div className='standard-board'>
//         <div className='standard-board-first-row'><ScoreBoard name="Caolan" isAroundTheBoardMode={true} playerTurn={player1IsNext}/> <ScoreBoard name='Dad' isAroundTheBoardMode={true} playerTurn={!player1IsNext}/></div>

//         <div className='main'>
//             <div className='game-container'>
//                 {/* {player1IsNext? player1Tiles: player2Tiles} */}
//                 {tilesArray.map((isVisible, index) => (
//                     <NumberTile num={index + 1} isHidden={!isVisible} onTileClick={() => onTileClick(index)} onX3Click={onX3Click} onX2Click={onX2Click}/>
//                 ))}
//             </div>
//         </div>
//     </div>
//   )
// }




// newer version  of AroundTheBoardMode.tsx
// import React, { useEffect, useState } from 'react'
// import NumberTile from './NumberTile';
// import ScoreBoard from './ScoreBoard';
// import AroundTheBoardVisibleTiles from './AroundTheBoardVisibleTiles';

// export default function AroundTheBoardMode() {
//     let numberArray: number[] = Array.from({ length: 20 }, (_, index) => index + 1);
//     const [player1Position, setPlayer1Postiion]= useState(1);
//     const [player2Position, setPlayer2Postiion]= useState(1);
//     // const [player1TileArray, setP1TileArray] = useState<JSX.Element[]>([]);
//     // const [player2TileArray, setP2TileArray] = useState<JSX.Element[]>([]);
//     // const [player1VisibleTiles, setP1VisibleTiles] = useState<number[]>([1,2,3])
//     // const [player2VisibleTiles, setP2VisibleTiles] = useState<number[]>([1,2,3])
//     const [shotCounter, setShotCounter] = useState<number>(0);
//     const [testCount, setTestCount] = useState<number>(0);
// //   const [shotCounter, setShotCounter] = useState(0);
//     const [player1IsNext, setPlayer1IsNext] = useState<boolean>(true);
//     // useEffect(() => {
//     //     let tilesArray: JSX.Element[] = [];
//     //     numberArray.forEach((value) => {
//     //         let hidden = false
//     //         if (value > 3) hidden = true
//     //         tilesArray.push(<NumberTile num={value} isHidden={hidden} onTileClick={onTileClick} onX3Click={onX3Click} onX2Click={onX2Click}/>)
//     //     })
//     //     setP1TileArray(tilesArray)
//     //     setP2TileArray(tilesArray)
//     // }, [])
//     useEffect(() => {
//         console.log('\n\n\n\@@@@@@@@@@@@@@@'+shotCounter)
//         if (shotCounter > 2) {
//             setPlayer1IsNext(!player1IsNext);
//             setShotCounter(0);
//         }
//     },[shotCounter])

//     useEffect(() => {
//         console.log('\n\n\n\n££££££££testCount: ' + testCount)
//     },[testCount])
    

//     function onTileClick(index: number) {
//         let testCountCopy = testCount
//         let nextTestCount = testCount + 1
//         setTestCount(nextTestCount)
//         console.log(nextTestCount)

//         // setShotCounter(prevShotCounter => prevShotCounter + 1)
//         // console.log(shotCounter)
//         // setShotCounter(prevShotCounter => {
//         //     let nextShotCounter = prevShotCounter + 1
//         //     console.log(nextShotCounter)

//         //     if (nextShotCounter >= 2) {
//         //         setPlayer1IsNext(!player1IsNext);
//         //         return 0;
//         //     }
//         //     console.log(nextShotCounter)
//         //     return nextShotCounter;
//         // })

//         if (shotCounter >= 2) {
//             // console.log('shotCounter >= 2 + shotCounter: ' + shotCounter)
//             setShotCounter(0);
//             setPlayer1IsNext(!player1IsNext);
//         }
//         else {
//             // console.log('shotCounter < 2 + shotCounter: ' + shotCounter)
//             setShotCounter(shotCounter + 1);

//         }
//         // const newTiles = currentPlayer === 1 ? [...player1TileArray] : [...player2TileArray];
//         // console.log('onCLICKLKK')
//         if (index === player1Position && player1IsNext) {
//             console.log('player1Position')
//         }
//         if (index === player2Position && !player1IsNext) {
//             console.log('player2Position')
//         }

//         seperatingIncrement()
        
        

        

//     }
//     function onClick() {
//         // setTestCount(testCount + 1)
//         console.log('clickd')
//     }
//     function seperatingIncrement(){
//         setTestCount(testCount + 1)
//     }
  
//     function onX3Click() {
//       //quickdebugconsole.log("X3 clicked")
//       }
  
//     function onX2Click() {
//       //quickdebugconsole.log("X2 clicked")
//       }
// // const tilesArray = currentPlayer === 1 ? player1TileArray : player2TileArray;
//   return (
//     <div className='standard-board'>
//         <div className='standard-board-first-row'><ScoreBoard name="Caolan" isAroundTheBoardMode={true} playerTurn={player1IsNext}/> <ScoreBoard name='Dad' isAroundTheBoardMode={true} playerTurn={!player1IsNext}/></div>

//         <div className='main'>
//             <div className='game-container' onClick={onClick}>{testCount}
//                 {/* {player1IsNext? player1Tiles: player2Tiles} */}
//                 {/* {tilesArray.map((isVisible, index) => (
//                     <NumberTile num={index + 1} isHidden={!isVisible} onTileClick={() => onTileClick(index)} onX3Click={onX3Click} onX2Click={onX2Click}/>
//                 ))} */}
//                 <AroundTheBoardVisibleTiles current={player1Position} onTileClick={onTileClick} onX2Click={onX2Click} onX3Click={onX3Click}/>
//                 {/* {player1TileArray}<br/>
//                 {player2TileArray}<br/> */}

//             </div>
//         </div>
//     </div>
//   )
// }

