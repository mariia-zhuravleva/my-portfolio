import { NavLink } from 'react-router-dom'
import landing from "../../assets/img/wandr-landing.gif"
import themeOne from "../../assets/img/themeone-page.png"
import themeTwo from "../../assets/img/themetwo-page.png"
import post from "../../assets/img/post-page.png"
import profile from "../../assets/img/profile-page.png"
import styles from './Wandr.module.css'

const Wandr = () => {
  const projectTechnologies = {
    Backend: ['Node.js'],
    Frontend: ['HTML5 •', 'CSS3 •', 'JavaScript •', 'React'],
    Database: ['MongoDB •', 'Mongoose'],
    Deployment: ['Netlify'],
    Authentication: ['JWT'],
    'Version Control': ['Git • GitHub'],
  }


  const projectFeatures = [
    'Secure User Authentication with JWT: Users can seamlessly log in using JSON Web Tokens, ensuring a secure and personalized experience.',
    'Personalized Profiles and Posts: Craft your travel narrative by creating and deleting posts, capturing and sharing the essence of your experiences.',
    'Interactive Engagement: Users can leave, edit, or delete comments under posts, fostering dynamic conversations within the community.',
    'Like and Save Features: Express appreciation by liking posts, and curate a collection of favorite posts in your profile.',
    "Article Likes: Engage with content by expressing appreciation through article likes. Show your support for content that resonates with you.",
    'Smart Search Functionality: Easily discover posts with a user-friendly search bar, allowing personalized exploration based on criteria like location.',
    'Multimedia Integration: Share the beauty of your journey through photo uploads, adding visual richness to your travel tales.',
    'Social Connectivity: Foster connections by following friends/bloggers and keep track of your following/followers list in your profile.',
    'Top Contributor Recognition: Achieve top contributor status, earning a special icon by your name on social media, showcasing your impactful contributions.',
    "Theme Customization: Tailor the app's visual experience with theme customization, allowing users to choose the aesthetic that resonates with their style."
  ]

  return (  
    <div className={`${styles.wandrContainer}`}>
      <div className={`${styles.rectangle}`}>
        <p className={`${styles.textDouble}`}>Wandr</p>
        <p className={`${styles.textWandr}`}>Wandr</p>
      </div>
      <div className={`${styles.journalDescription}`}>
        <p className={`${styles.textDescription}`}>
          Wandr is a web-based application designed to inspire, connect, and celebrate the diverse stories woven through each traveler's journey. With an array of features crafted to enhance user experience and foster a vibrant community, Wandr empowers individuals to embark on authentic adventures and share their unique experiences with the world.
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
          <NavLink to="https://main--wandr-sei.netlify.app/" target="_blank" rel="noopener noreferrer">Wandr</NavLink>
        </div>
      </div>
      <div className={styles.landingWandr}>
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
        <img className={styles.journalArticles} src={themeTwo} alt="themeone-page" />
        <img className={styles.wandrThemeOne} src={themeOne} alt="themetwo-page" />
      </div>
      <div className={styles.wandrMorePages}>
        <img className={styles.wandrPostPage} src={post} alt="post-page" />
        <img className={styles.wandrProfilePage} src={profile} alt="profile-page" />
      </div>
      <div className={styles.journalLink}>
        <NavLink to="https://main--wandr-sei.netlify.app/" target="_blank" rel="noopener noreferrer">Explore Further</NavLink>
      </div>
    </div>
  )
}

export default Wandr