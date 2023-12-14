import { NavLink } from 'react-router-dom'
import landing from "../../assets/img/pp-landing.gif"
import resorts from "../../assets/img/resorts-page.png"
import resort from "../../assets/img/resort-page.png"
import mobileVideo from "../../assets/img/pp-video.gif"
import mobile from "../../assets/img/pp-mobile-views.png"
import styles from './PP.module.css'

const PP = () => {
  const projectTechnologies = {
    Backend: ['Node.js •', 'Express.js'],
    Frontend: ['HTML5 •', 'CSS3 •', 'EJS templating engine'],
    Database: ['MongoDB'],
    Deployment: ['Fly.io'],
    Authentication: ['Google OAuth'],
    'Version Control': ['Git • GitHub'],
  }


  const projectFeatures = [
    'Winter Wonderland Inspiration: Embark on a visual journey with a curated collection of breathtaking winter-inspired images.',
    'Comprehensive Resort Information: Access a wealth of knowledge through carefully crafted articles, providing in-depth details about various ski and snowboard resorts.',
    'Resort Details and Reviews: Dive deep into specific resorts, finding comprehensive information and leaving reviews based on your personal experiences.',
    'Favorite Resorts List: Tailor your experience by creating a personalized list of favorite resorts for quick and easy access. Manage your preferences and remove resorts as needed.',
    'User Profiles: Keep track of your favorite resorts and manage your preferences seamlessly through your user profile.',
    'Responsive Design: Enjoy a consistent and user-friendly experience across various devices, including desktops and mobile phones.',
    "Intuitive Navigation: Effortlessly explore the app's features with a straightforward navigation system, ensuring you find the information you need quickly and easily."
  ]

  return (
    <div className={`${styles.ppContainer}`}>
      <div className={`${styles.rectangle}`}>
        <p className={`${styles.textDouble}`}>Powder Peak</p>
        <p className={`${styles.textPP}`}>Powder Peak</p>
      </div>
      <div className={`${styles.journalDescription}`}>
        <p className={`${styles.textDescription}`}>
          Powder Peak, meticulously crafted with a love for winter landscapes, invites you to immerse yourself in a world of stunning images and informative articles about ski and snowboard resorts.
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
          <NavLink to="https://mz-powder-peak.fly.dev/" target="_blank" rel="noopener noreferrer">Powder Peak</NavLink>
        </div>
      </div>
      <div className={styles.landingPP}>
        <img src={landing} alt="landing-page" />
      </div>
      <div className={`${styles.journalDetailTwo}`}>
        <p className={`${styles.journalDetail}`}><span className={`${styles.featuresSpan}`}>Key Features</span></p>
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
        <img className={styles.journalArticles} src={resort} alt="resort-page" />
        <img className={styles.wandrThemeOne} src={resorts} alt="resorts-page" />
      </div>
      <div className={styles.ppMobilePages}>
        <img className={styles.ppMobileViews} src={mobile} alt="mobile-views" />
        <img className={styles.ppMobilVideo} src={mobileVideo} alt="mobile-video" />
      </div>
      <div className={styles.journalLink}>
        <NavLink to="https://mz-powder-peak.fly.dev/" target="_blank" rel="noopener noreferrer">Explore Further</NavLink>
      </div>
    </div>
  )
}

export default PP