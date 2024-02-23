import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function MainMenu() {
  return (
      <div className='chalk-list'>
          <h1>Gilly Darts</h1>
              <a href='/standard'>Regular Darts</a>
              <a href='/around'>Around The Board</a>
              <a href='/cricket'>Cricket</a>
              {/* TODO <a href=''>Leader Boards</a> */}
      </div>
  )
}
