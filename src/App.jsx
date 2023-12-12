import { Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import ProjectsIndex from './components/ProjectsIndex/ProjectsIndex'
import Contact from './components/Contact/Contact'
import Journal from './components/Journal/Journal'
import AR from './components/AR/AR'
import PP from './components/PP/PP'
import TTT from './components/TTT/TTT'
import Wandr from './components/Wandr/Wandr'


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
        <Route path='/journal' element={<Journal />} />
        <Route path='/wandr' element={<Wandr />} />
        <Route path='/powder-peak' element={<PP />} />
        <Route path='/artful-recollections' element={<AR />} />
        <Route path='/tic-tac-toe' element={<TTT />} />
      </Routes>
    </>
  )
}

export default App


