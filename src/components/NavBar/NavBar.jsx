// npm modules
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`${styles.navbarContainer} ${scrolled && styles.scrolled}`} style={{backgroundColor: location.pathname === '/contact' ? '#2d2926' : ''}}>
      <div className={`${styles.sideContainer}`}>
        <ul className={`${styles.verticalList}`}>
          <hr className={`${styles.sideLine}`} style={{borderColor: location.pathname === '/contact' ? '#dbcdc2' : ''}} />    
          <li><NavLink to="https://www.linkedin.com/in/mariia-zhuravleva/" className={`${styles.linkedInLink} ${location.pathname === '/contact' && styles.contactLink}`}>LI</NavLink></li>
          <li><NavLink to="https://github.com/mariia-zhuravleva" className={`${styles.linkedInLink} ${location.pathname === '/contact' && styles.contactLink}`}>GitHub</NavLink></li>
          <li><NavLink to="https://www.instagram.com/kalininaaa/" className={`${styles.linkedInLink} ${location.pathname === '/contact' && styles.contactLink}`}>Inst</NavLink></li>
        </ul> 
      </div>
      <nav className={`${styles.container}`}>
        <ul>
          <li><NavLink to="/" style={{ color: location.pathname === '/' ? '#c0a592' : (location.pathname === '/contact' ? '#dbcdc2' : '') }}>Home</NavLink></li>
          <li><NavLink to="/about" style={{ color: location.pathname === '/about' ? '#c0a592' : (location.pathname === '/contact' ? '#dbcdc2' : '') }}>About</NavLink></li>
          <li><NavLink to="/projects" style={{ color: location.pathname === '/projects' ? '#c0a592' : (location.pathname === '/contact' ? '#dbcdc2' : '') }}>Projects</NavLink></li>
          <li><NavLink to="/contact" style={{ color: location.pathname === '/contact' ? '#c0a592' : (location.pathname === '/contact' ? '#dbcdc2' : '')}}>Contact</NavLink></li>
        </ul> 
      </nav>
    </div>
  )
}

export default NavBar