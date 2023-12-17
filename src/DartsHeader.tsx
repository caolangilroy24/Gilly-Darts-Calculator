import React from 'react'
import image from './img/winmau.jpeg'
import { TfiMenu } from "react-icons/tfi";
import { IoStatsChartSharp } from "react-icons/io5";



export default function DartsHeader() {
  const style = { color: "white", fontSize: "1.5em" }
  return (
    <>
    <div className='header'>
      
      <TfiMenu style={style}/>
      {/* <div> */}
        <img src={image} alt='winmau' />
      {/* </div> */}
      <IoStatsChartSharp style={style}/>
    
    </div>
    </>
  )
}
