import React from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
