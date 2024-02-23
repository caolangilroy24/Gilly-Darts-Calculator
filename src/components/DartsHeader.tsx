import React from 'react'
import image from '../assets/winmau.jpeg'
import { TfiMenu } from "react-icons/tfi";
import { IoStatsChartSharp } from "react-icons/io5";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function DartsHeader() {
  const style = { color: "white", fontSize: "1.5em" }
  return (
    <>
    <div className='header'>
      <Router>
      
        <a href='/'><TfiMenu style={style}/></a>
          <img src={image} alt='winmau' />
        <IoStatsChartSharp style={style}/>
    </Router>
    </div>
    </>
  )
}
