import React from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
