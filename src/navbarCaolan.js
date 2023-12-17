import React from 'react'
// import { NavLink } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function Navbar() {

  return (
    <>
      <Router>
        <nav data-testid='navbar' className='nav'>
            <a data-testid='nav-home' href='/' className='site-title'>Caolan.com</a>
          <ul>
            <li>
              <a data-testid='nav-search' href='/citysearch'>City Search</a>
            </li>
            <li>
              <a data-testid='nav-tik' href='/tictac'>Tic Tac Toe</a>
            </li>
            <li>
              <a data-testid='nav-tdl' href='/todolist'>To Do List</a>
            </li>
            <li >
              <a data-testid='nav-blog' href='/blog'>Blog</a>
            </li>
          </ul>
        </nav>
      </Router>
  
    </>
    
  )
}
