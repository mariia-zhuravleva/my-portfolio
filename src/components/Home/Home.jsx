import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import arrowDown from "../../assets/img/arrowDown.png"
import About from '../About/About'
import ProjectsIndex from '../ProjectsIndex/ProjectsIndex'

const Home = () => {
  return (
    <div className={`${styles.bigContainer}`}>
      <div className={`${styles.homeContainer}`}>
        <div className={styles.topRight}>
          <p>Committed to creating sophisticated digital experiences that captivate users, ensuring a smooth and intuitive interaction</p>
        </div>
        <div className={`${styles.homePhraseContainer}`}>
          <p className={`${styles.homePhrase}`}>
            Blending <span className={`${styles.homeSpan}`}>Aesthetics</span> and Seamless <span className={`${styles.homeSpan} ${styles.secondLine}`}>Functionality</span>
          </p>
        </div>
        <div className={styles.bottomLeft}>
          <p className={styles.name}>Mariia Zhuravleva</p>
          <p>Software Engineer ⎢ Full Stack Web Developer </p>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <Link to="/about" className={styles.arrowDownLink}>
          <div className={styles.arrowDown}>
            <img src={arrowDown} alt="arrow-down" />
          </div>
        </Link>
      </div>
      <div className={`${styles.bigAboutContainer}`}>
        <About />
      </div>
      <div className={`${styles.projectsIndexContainer}`}>
        <ProjectsIndex />
      </div>
    </div>
  )
}

export default Home
