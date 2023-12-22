import React from 'react'
// import { Router } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function MainMenu() {
  return (
    // <Router>
      <div className='chalk-list'>
          <h1>Gilly Darts</h1>
              <a href='/standard'>Regular Darts</a>
              <a href='/around'>Around The Board</a>
              <a href='/cricket'>Cricket</a>
              {/* <a href='/main'</a> */}
              {/* <a href=''>Leader Boards</a> */}
      </div>
    // </Router>
  )
}
