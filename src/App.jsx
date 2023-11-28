import React from 'react';
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// components
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import ProjectsIndex from './components/ProjectsIndex/ProjectsIndex'
import Contact from './components/Contact/Contact'


import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<ProjectsIndex />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
