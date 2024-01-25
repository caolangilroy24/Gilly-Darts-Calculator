import React from 'react'
import WoodenFrame from './img/WoodenFrame.jpg';

interface SelectUserProps {
    player1Name: string;
    player2Name: string;
}
//{player1Name, player2Name}: SelectUserProp
export default function SelectUser() {

  let savedUserArray: string[] = ['Caolan', 'Dad', 'Eibhin', 'Rian', 'Ruairi']; // This is just an array holding player names. Later it will be changed to hold User objects, and It will update Statistics.
  let displayUserArray: JSX.Element[] = [];
  savedUserArray.forEach((user) => { 
    displayUserArray.push(<a>{user}</a>)
  })
  return (
    <div className='chalk-container'>
        <div className='wooden-frame' style={{backgroundImage:`url(${WoodenFrame})`,backgroundRepeat:"no-repeat"}}>
            <div className='chalkboard'>
            <div className='chalk-list'>
            <h1>Select User</h1>
            {displayUserArray}
            </div>
                {/* <MainMenu /> */}
            </div>
        </div>
    </div>
        
  )
}
