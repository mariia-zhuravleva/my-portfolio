import styles from './Home.module.css'
// import background from "../../assets/img/background.png"

const Home = () => {
  return (
    <div className={`${styles.homeContainer}`}>
      <div className={`${styles.homePhraseContainer}`}>
        {/* <img src={background} alt="image" /> */}
        <p className={`${styles.homePhrase}`}>
          Blending <span className={`${styles.homeSpan}`}>Aesthetics</span> and Seamless <span className={`${styles.homeSpan} ${styles.secondLine}`}>Functionality</span>
        </p>
      </div>
      {/* <div className={`${styles.homeBackground}`}>
      </div> */}
    </div>
  )
}

export default Home