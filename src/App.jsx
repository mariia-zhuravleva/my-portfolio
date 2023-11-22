import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// components
import NavBar from './components/NavBar/NavBar'
import About from './pages/About/About'
import ProjectsIndex from './pages/ProjectsIndex/ProjectsIndex'


import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<ProjectsIndex />}/>
        {/* <Route path='/projects/:projectId' element={<ProjectShow />}/> */}
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App
