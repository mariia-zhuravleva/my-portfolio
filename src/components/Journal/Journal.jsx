import { NavLink } from 'react-router-dom'
import landing from "../../assets/img/journal-landing.gif"
import articles from "../../assets/img/journal-articles-page.png"
import about from "../../assets/img/journal-about-page.png"
import mobileVideo from "../../assets/img/journal-video.gif"
import mobile from "../../assets/img/journal-mobile-views.jpg"
import styles from './Journal.module.css'

const Journal = () => {
  const projectTechnologies = {
    Frontend: ['HTML5 •', 'CSS3 •', 'JavaScript'],
    Backend: ['Python •', 'Django •', 'Neon'],
    Database: ['PostgreSQL'],
    Deployment: ['Fly.io'],
    'Cloud Storage': ['Amazon AWS S3'],
    'Version Control': ['Git • GitHub'],
  }


  const projectFeatures = [
    'Inspiration and Insightful Content: The app is dedicated to crafting insightful content across a spectrum of topics, designed to inspire, educate, and make a positive impact.',
    'Specific Topic Information: Explore a diverse range of articles, each focusing on a specific topic.',
    "Search Functionality: Quickly locate articles of interest by utilizing the search functionality. Filter content by topics to find precisely what you're looking for.",
    "Pagination: Effortlessly navigate through a list of articles using pagination controls. Move through pages to discover a wide array of content, from the latest releases to timeless classics.",
    "Article Likes: Engage with content by expressing appreciation through article likes. Show your support for content that resonates with you.",
    "Responsive Design: Enjoy a consistent and user-friendly experience across various devices, including desktops and mobile phones.",
    "Intuitive Navigation: User-friendly navigation allows seamless movement between pages. Easily transition from the home page to explore articles, dive into specific topics, or learn more about the app's mission."
  ]

  return ( 
    <div className={`${styles.journalContainer}`}>
      <div className={`${styles.rectangle}`}>
        <p className={`${styles.textDouble}`}>The Journal</p>
        <p className={`${styles.text}`}>The Journal</p>
      </div>
      <div className={`${styles.journalDescription}`}>
        <p className={`${styles.textDescription}`}>
          The Journal is a dedicated space committed to curating meaningful content across a spectrum of topics, offering inspiration, education, and positive impact.
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
          <NavLink to="https://mariasthejournal.fly.dev/" target="_blank" rel="noopener noreferrer">The Journal</NavLink>
        </div>
      </div>
      <div className={styles.landing}>
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
      <div className={styles.journalPages}>
        <img className={styles.journalArticles} src={articles} alt="articles-page" />
        <img className={styles.journalAbout} src={about} alt="about-page" />
      </div>
      <div className={styles.journalMobile}>
        <img className={styles.journalMobileViews} src={mobile} alt="mobile-views" />
        <img className={styles.journalMobilVideo} src={mobileVideo} alt="mobile-video" />
      </div>
      <div className={styles.journalLink}>
        <NavLink to="https://mariasthejournal.fly.dev/" target="_blank" rel="noopener noreferrer">Explore Further</NavLink>
      </div>
    </div>
  )
}

export default Journal