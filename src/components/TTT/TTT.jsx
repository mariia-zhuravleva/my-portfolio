import { NavLink } from 'react-router-dom'
import landing from "../../assets/img/ttt-landing.gif"
import board from "../../assets/img/board-page.png"
import game from "../../assets/img/ttt-game-page.png"
import mobileVideo from "../../assets/img/ttt-video.gif"
import styles from './TTT.module.css'

const TTT = () => {
  const projectTechnologies = {
    Frontend: ['HTML5 •', 'CSS3 •', 'JavaScript'],
    Deployment: ['Netlify'],
    'Version Control': ['Git • GitHub'],
  }


  const projectFeatures = [
    'Interactive Board Management: The inclusion of features like a clearing board enhances gameplay, allowing players to reset the board effortlessly and enjoy multiple rounds.',
    'Turn Indicators for Seamless Gameplay: Intuitive turn indicators guide players through the excitement, ensuring a seamless and enjoyable experience for both competitors.',
    'Deployed Seamlessly on Netlify: The game is accessible to players worldwide, hosted seamlessly on Netlify for a smooth and responsive gaming experience.',
  ]

  return (
    <div className={`${styles.tttContainer}`}>
      <div className={`${styles.rectangle}`}>
        <p className={`${styles.textDoubleTTT}`}>Tic-Tac-Toe</p>
        <p className={`${styles.textAR}`}>Tic-Tac-Toe</p>
      </div>
      <div className={`${styles.journalDescription}`}>
        <p className={`${styles.textDescription}`}>
          Tic-Tac-Toe is an interactive two-player mode game on a 3x3 grid. Engineered with a focus on user experience, the game boasts a clean interface that includes convenient features like a clearing board and turn indicators.
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
          <NavLink to="https://marias-tic-tac-toe.netlify.app/" target="_blank" rel="noopener noreferrer">Tic-Tac-Toe</NavLink>
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
        <img className={styles.journalArticles} src={board} alt="board-page" />
        <img className={styles.wandrThemeOne} src={game} alt="game-page" />
      </div>
      <div className={styles.arMobilePages}>
        <img className={styles.ppMobileViews} src={mobileVideo} alt="mobile-views" />
      </div>
      <div className={styles.journalLink}>
        <NavLink to="https://marias-tic-tac-toe.netlify.app/" target="_blank" rel="noopener noreferrer">Explore Further</NavLink>
      </div>
    </div>
  )
}

export default TTT
