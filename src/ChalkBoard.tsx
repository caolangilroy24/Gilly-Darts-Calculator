import React from 'react'
import WoodenFrame from './img/WoodenFrame.jpg';
import MainMenu from './MainMenu';

export default function ChalkBoard() {
  return (
    <div className='chalk-container'>
        <div className='wooden-frame' style={{backgroundImage:`url(${WoodenFrame})`,backgroundRepeat:"no-repeat"}}>
            <div className='chalkboard'>
                <MainMenu />
            </div>
        </div>
    </div>
  )
}
