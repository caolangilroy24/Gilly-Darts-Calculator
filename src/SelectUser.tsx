import React from 'react'
import WoodenFrame from './img/WoodenFrame.jpg';

export default function SelectUser() {
  return (
    <div className='chalk-container'>
        <div className='wooden-frame' style={{backgroundImage:`url(${WoodenFrame})`,backgroundRepeat:"no-repeat"}}>
            <div className='chalkboard'>
            <div className='chalk-list'>
            <h1>Select User</h1>
            <a>Caolan</a>
            <a>Dad</a>
            <a>Rian</a>
            <a>Ruairi</a>
            <a>Eibhin</a>  
            </div>
                {/* <MainMenu /> */}
            </div>
        </div>
    </div>
        
  )
}
