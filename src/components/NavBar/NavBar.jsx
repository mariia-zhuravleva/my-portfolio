import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

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
          <li><NavLink to="/" id='home' className={`${styles.navLink}`} style={{ color: location.pathname === '/' ? '#c0a592' : (location.pathname === '/contact' ? '#dbcdc2' : '') }}>Home</NavLink></li>
          <li><NavLink to="/about" id='about' className={`${styles.navLink}`} style={{ color: location.pathname === '/about' ? '#c0a592' : (location.pathname === '/contact' ? '#dbcdc2' : '') }}>About</NavLink></li>
          <li><NavLink to="/projects" id='projects' className={`${styles.navLink}`} style={{ color: location.pathname === '/projects' ? '#c0a592' : (location.pathname === '/contact' ? '#dbcdc2' : '') }}>Projects</NavLink></li>
          <li><NavLink to="/contact" id='contact' className={`${styles.navLink}`} style={{ color: location.pathname === '/contact' ? '#c0a592' : (location.pathname === '/contact' ? '#dbcdc2' : '')}}>Contact</NavLink></li>
        </ul> 
      </nav>
    </div>
  )
}

export default NavBar

// const navLinksEls = document.querySelectorAll('.navLink')
// const sectionEls = document.querySelectorAll('.section')

// let currentSection = 'home'
// window.addEventListener('scroll', () => {
//   sectionEls.forEach(sectionEl => {
//     if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 2)) {
//       currentSection = sectionEl.id
//     }
//   })
//   navLinksEls.forEach(navlinkEl => {
//     if (navlinkEl.href.includes(currentSection)) {
//       document.querySelector('.active').classList.remove('active')
//       navlinkEl.classList.add('active')
//     }
//   })
// })