import React, { useEffect, useState } from 'react'
import WoodenFrame from '../assets/WoodenFrame.jpg';

interface SelectUserProps {
  initiateGame: (name1: string, name2: string, player1IsFirst: boolean) => void;
}
export default function SelectUser({initiateGame}: SelectUserProps) {
  const [player1Name, setPlayer1Name]= useState<string>('');
  const [player2Name, setPlayer2Name]= useState<string>('');
  const [usersSelected, setUsersSelected] = useState<boolean>(false);

  useEffect(()=> {
    if (player1Name && player2Name) {
      setUsersSelected(true);
    }
  }, [player1Name, player2Name])
  
  const handleTileClick = (user: string) => (event: React.MouseEvent) =>{
    if (player1Name === '') {
      setPlayer1Name(user);
    } else if (player2Name === '') {
      setPlayer2Name(user);
    } 
  }

  const handleFirstTurnSelection = (name1: string, name2: string, player1IsFirst: boolean) => (event: React.MouseEvent) => {
    initiateGame(name1, name2, player1IsFirst);
  }
  
  let savedUserArray: string[] = ['Caolan', 'Dad', 'Eibhin', 'Rian', 'Ruairi']; // This is just an array holding player names. Later it will be changed to hold User objects, and It will update Statistics.
  let displayUserArray: JSX.Element[] = [];
  savedUserArray.forEach((user) => { 
    displayUserArray.push(<a id={user} onClick={handleTileClick(user)}>{user}</a>)
  })
  return (
    <div className='chalk-container'>
        <div className='wooden-frame' style={{backgroundImage:`url(${WoodenFrame})`,backgroundRepeat:"no-repeat"}}>
            <div id='chalkboard' className='chalkboard'>
            <div id='chalk-list' className='chalk-list'>
            {!usersSelected && <h1 id='h1'>Select User</h1>}
            {!usersSelected && <><p id='users'>Player 1: {player1Name} Player 2: {player2Name}</p></>}
            {!usersSelected && displayUserArray}
            {usersSelected && <h2 id='bull-prompt'>Throw for bull and select who is going first:</h2>}
            {usersSelected && <><h3 id='select-who-is-first' onClick={handleFirstTurnSelection(player1Name, player2Name, true)}>Player 1: {player1Name}</h3> <h3 onClick={handleFirstTurnSelection(player1Name, player2Name, false)}>Player 2: {player2Name}</h3> </>}
            </div>
            </div>
        </div>
    </div>
        
  )
}
