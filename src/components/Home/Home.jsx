import styles from './Home.module.css'
import arrowDown from "../../assets/img/arrowDown.png"

const Home = () => {
  return (
    <div className={`${styles.homeContainer}`}>
      <div className={styles.topRight}>
        <p>Committed to creating sophisticated digital experiences that captivate users, ensuring a smooth and intuitive interaction.</p>
      </div>
      <div className={`${styles.homePhraseContainer}`}>
        <p className={`${styles.homePhrase}`}>
          Blending <span className={`${styles.homeSpan}`}>Aesthetics</span> and Seamless <span className={`${styles.homeSpan} ${styles.secondLine}`}>Functionality</span>
        </p>
      </div>
      <div className={styles.bottomLeft}>
        <p className={styles.name}>Mariia Zhuravleva</p>
        <p>Software Engineer / Full Stack Web Developer </p>
        <div className={styles.arrowContainer}>
          <a href="#end-of-page" className={styles.arrowDown}>
            <img src={arrowDown} alt="arrow-down" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
