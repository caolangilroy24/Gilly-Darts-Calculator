import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StandardMode from './StandardMode'
import AroundTheBoardMode from './AroundTheBoardMode'
import CricketMode from './CricketMode'
import MainMenu from './MainMenu'
import ChalkBoard from './ChalkBoard'



export default function GameRoutes() {
  return (
    // <div>Routes</div>
    <Router>
        <Routes>
        //         <Route path="/standard" element={<StandardMode/>}></Route>
        //         <Route path="/around" element={<AroundTheBoardMode/>}></Route>
        //         <Route path="/cricket" element={<CricketMode/>}></Route>
        //         <Route path="/" element={<ChalkBoard/>}></Route>
        </Routes>
    </Router>
  )
}
