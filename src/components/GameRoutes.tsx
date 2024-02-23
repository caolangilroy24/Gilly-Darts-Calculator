import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StandardMode from '../pages/Standard/StandardMode'
import AroundTheBoardMode from '../pages/AroundTheBoard/AroundTheBoardMode'
import CricketMode from '../pages/Cricket/CricketMode'
import MainMenu from '../pages/Home/MainMenu'
import ChalkBoard from './ChalkBoard'



export default function GameRoutes() {
  return (
    <Router>
        <Routes>
               <Route id={'standard'} path="/standard" element={<StandardMode/>}></Route>
               <Route id={'around'} path="/around" element={<AroundTheBoardMode/>}></Route>
               <Route id={'cricket'} path="/cricket" element={<CricketMode/>}></Route>
               <Route id={'home'} path="/" element={<ChalkBoard/>}></Route>
        </Routes>
    </Router>
  )
}
