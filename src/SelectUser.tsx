import React, { useState } from 'react'
import WoodenFrame from './img/WoodenFrame.jpg';

interface SelectUserProps {
    selectUser: (name: string, player1: boolean) => void;
}
export default function SelectUser({selectUser}: SelectUserProps) {
  const [player1Name, setPlayer1Name]= useState<string>('');
  const [player2Name, setPlayer2Name]= useState<string>('');
  
  const handleTileClick = (user: string) => (event: React.MouseEvent) =>{
    console.log('clicked')
    if (player1Name === '') {
      setPlayer1Name(user);
      
      selectUser(user, true);
    } else if (player2Name === '') {
      setPlayer2Name(user);

      selectUser(user, false);
      
    } 
  }
  
  let savedUserArray: string[] = ['Caolan', 'Dad', 'Eibhin', 'Rian', 'Ruairi']; // This is just an array holding player names. Later it will be changed to hold User objects, and It will update Statistics.
  let displayUserArray: JSX.Element[] = [];
  savedUserArray.forEach((user) => { 
    displayUserArray.push(<a onClick={handleTileClick(user)}>{user}</a>)
  })
  return (
    <div className='chalk-container'>
        <div className='wooden-frame' style={{backgroundImage:`url(${WoodenFrame})`,backgroundRepeat:"no-repeat"}}>
            <div className='chalkboard'>
            <div className='chalk-list'>
            <h1>Select User</h1>
            <p>Player 1: {player1Name} Player 2: {player2Name}</p>
            {displayUserArray}
            </div>
                {/* <MainMenu /> */}
            </div>
        </div>
    </div>
        
  )
}
