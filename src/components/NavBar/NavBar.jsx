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
    <div className={`${styles.navbarContainer} ${scrolled && styles.scrolled}`}>
      <div className={`${styles.sideContainer}`}>
        <ul className={`${styles.verticalList}`}>
          <hr className={`${styles.sideLine}`} />    
          <li><NavLink to="https://www.linkedin.com/in/mariia-zhuravleva/">LI</NavLink></li>
          <li><NavLink to="https://github.com/mariia-zhuravleva">GitHub</NavLink></li>
          <li><NavLink to="https://www.instagram.com/kalininaaa/">Inst</NavLink></li>
        </ul> 
      </div>
      <nav className={`${styles.container}`}>
        <ul>
          <li><NavLink to="/" style={{ color: location.pathname === '/' ? '#dbcdc2' : '' }}>Home</NavLink></li>
          <li><NavLink to="/about" style={{ color: location.pathname === '/about' ? '#dbcdc2' : '' }}>About</NavLink></li>
          <li><NavLink to="/projects" style={{ color: location.pathname === '/projects' ? '#dbcdc2' : '' }}>Projects</NavLink></li>
          <li><NavLink to="/contact" style={{ color: location.pathname === '/contact' ? '#dbcdc2' : '' }}>Contact</NavLink></li>
        </ul> 
      </nav>
    </div>
  )
}

export default NavBar