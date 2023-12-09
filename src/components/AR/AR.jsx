import { NavLink } from 'react-router-dom'
import landing from "../../assets/img/ar-landing.gif"
import level from "../../assets/img/level-page.png"
import game from "../../assets/img/game-page.png"
import mobileVideo from "../../assets/img/ar-video.gif"
import styles from './AR.module.css'

const AR = () => {
  const projectTechnologies = {
    Frontend: ['HTML5 •', 'CSS3 •', 'JavaScript'],
    Deployment: ['Netlify'],
    'Version Control': ['Git • GitHub'],
  }


  const projectFeatures = [
    'Beautiful Artwork: Immerse yourself in a curated collection of breathtaking art pieces.',
    'Difficulty Levels: Tailor the challenge to your skill level—choose from novice, proficient, or maestro modes to test your memory skills.',
    'Move Counter: Keep track of your progress with a move counter, adding a strategic element to the game.',
    'Countdown Timer: Race against time to complete the game—adding an exciting element of urgency.',
    'Reset Functionality: Begin a new game at any time with the convenient reset button.',
    'Sound Effects: Enhance your gaming experience with interactive sound effects that bring the virtual art gallery to life.',
    'Falling Petals Animation: Immerse yourself in a visual spectacle as delicate petals gracefully descend across the screen.',
    'Mobile Optimization: Enjoy a seamless gaming experience on various devices, ensuring optimal performance and responsiveness.'
  ]

  return (
    <div className={`${styles.arContainer}`}>
      <div className={`${styles.rectangle}`}>
        <p className={`${styles.textDoubleAR}`}>Artful Recollections</p>
        <p className={`${styles.textAR}`}>Artful Recollections</p>
      </div>
      <div className={`${styles.journalDescription}`}>
        <p className={`${styles.textDescription}`}>
          Artful Recollections: Canvas Card Quest is an engaging card-matching game that seamlessly fuses visual expression and interactivity, inviting players to connect with stunning artworks.
        </p>
      </div>
      <div className={`${styles.journalDetails}`}>
        <div className={`${styles.journalDetailOne}`}>
          <p className={`${styles.journalDetail}`}><span>Technologies Used</span></p>
          <ul className={styles.journalTechnologies}>
            {Object.keys(projectTechnologies).map((category, index) => (
              <li key={index}>
                <div>
                  <p className={`${styles.journalCategory}`}>{category}</p>
                  <ul>
                    {projectTechnologies[category].map((technology, techIndex) => (
                      <li key={techIndex}>{technology}</li>
                    ))}
                  </ul>
                </div> 
            </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.journalDetailThree}`}>
          <p className={`${styles.journalDetail}`}><span>URL</span></p>
          <NavLink to="https://artful-recollections-quest.netlify.app/" target="_blank" rel="noopener noreferrer">Artful Recollections</NavLink>
        </div>
      </div>
      <div className={styles.landingPP}>
        <img src={landing} alt="landing-page" />
      </div>
      <div className={`${styles.journalDetailTwo}`}>
        <p className={`${styles.journalDetail}`}><span>Key Features</span></p>
        <ul className={styles.journalFeatures}>
          {projectFeatures.map((feature, index) => {
            const [key, value] = feature.split(':').map((item) => item.trim());
            return (
              <li key={index}>
                <div>
                  <p className={`${styles.journalFeature}`}>{key}</p>
                  <p>{value}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.wandrPages}>
        <img className={styles.journalArticles} src={level} alt="level-page" />
        <img className={styles.wandrThemeOne} src={game} alt="game-page" />
      </div>
      <div className={styles.arMobilePages}>
        <img className={styles.ppMobileViews} src={mobileVideo} alt="mobile-views" />
        {/* <img className={styles.ppMobilVideo} src={mobileVideo} alt="mobile-video" /> */}
      </div>
      <div className={styles.journalLink}>
        <NavLink to="https://artful-recollections-quest.netlify.app/" target="_blank" rel="noopener noreferrer">Explore Further</NavLink>
      </div>
    </div>
  )
}

export default AR