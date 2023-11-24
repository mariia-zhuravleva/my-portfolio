// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = () => {

  return (
    <div className={`${styles.navbarContainer}`}>
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