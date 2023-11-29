// npm modules
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)

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
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul> 
      </nav>
    </div>
  )
}

export default NavBar