import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

// css
import styles from './About.module.css'
import pic1 from "../../assets/img/pic1.jpg"

const About = () => {

  return (
    <div className={styles.aboutContainer}>
      <div className={`${styles.curtain}`} />
      <div className={styles.mainAboutContainer}>
        <div className={`${styles.mainHeader}`}>
          <p className={`${styles.aboutWord}`}>About</p>
          {/* <hr className={`${styles.aboutLine}`} /> */}
        </div>
        <div className={styles.aboutMeContainer}>
          <div className={styles.contentContainer}>
            <div className={`${styles.paragraphAbout} ${styles.column}`}>
              <p className={styles.greeting}>Hey there!  I'm Mariia</p>
              <p> I'm a seasoned Software Engineer with a unique blend of technical expertise and a creative background in lifestyle and fashion content creation. 
                My journey reflects a commitment to seamlessly integrate creativity with code to deliver impactful solutions.
                <br />
                <br />
                My approach to software engineering centers around a user—centric perspective. I prioritize crafting intuitive and user—friendly solutions that can positively influence peopleʼs lives. With a knack for creative problem—solving, I make sure that every line of code contributes to a smooth and enjoyable user experience.
                <br />
                <br />
                I believe in the significance of not just doing things efficiently but ensuring that every development effort aligns with a meaningful purpose. My goal is to contribute to the creation of products that go beyond mere functionality, making a genuine impact in the world.
              </p>
              <p className={styles.experienceHeader}>Experience</p>
              <p>
                During my content creation career, I cultivated adaptability, time management, and problem—solving skills. Now, as a Software Engineer, I leverage these skills to ensure each project I undertake meets the highest standards of quality and innovation.
              </p>
              <p className={styles.skillsHeader}>Skills</p>
              <p>
                <span className={styles.abbr}>Frontend</span><br /> JavaScript • React • HTML5 • CSS3 • Responsive Web Design
                <br /><br />
                <span className={styles.abbr}>Backend</span> <br />Python • Django • Node.js • Express • RESTful APIs
                <br /><br />
                <span className={styles.abbr}>Database</span><br />PostgreSQL • MongoDB
              </p>
              <div className={styles.resume}>
                <NavLink to="https://drive.google.com/file/d/1I3URdaF0Sl5UQwdMp8DV6fu4JSuU3feU/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</NavLink>
              </div>
            </div>

            <div className={`${styles.myImages} ${styles.anotherColumn}`}>
              <img src={pic1} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
              // <div className={styles.imageText}>
              //   <Link to="https://www.linkedin.com/in/mariia-zhuravleva/" target="_blank" rel="noopener noreferrer"
              //     style={{
              //       textDecoration: 'none',
              //     }}
              //     onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              //     onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              //   >
              //     LinkedIn
              //   </Link>
              // </div>

export default About
