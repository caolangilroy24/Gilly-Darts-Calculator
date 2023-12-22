import React from 'react'
import image from './img/winmau.jpeg'
import { TfiMenu } from "react-icons/tfi";
import { IoStatsChartSharp } from "react-icons/io5";
// import { Router } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'




export default function DartsHeader() {
  const style = { color: "white", fontSize: "1.5em" }
  return (
    <>
    <div className='header'>
      <Router>
      
        <a href='/'><TfiMenu style={style}/></a>
        {/* <div> */}
          <img src={image} alt='winmau' />
        {/* </div> */}
        <IoStatsChartSharp style={style}/>
    </Router>
    </div>
    </>
  )
}
