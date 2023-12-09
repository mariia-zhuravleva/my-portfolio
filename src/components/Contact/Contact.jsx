import { useEffect } from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [])

  return (
    <div className={`${styles.contactContainer}`}>
      <div className={`${styles.rectangleContact}`}>
        <div className={`${styles.textContainer}`}>
          <p className={`${styles.textDoubleContact}`}>Hello</p>
          <p className={`${styles.textContact}`}>Hello.</p>
        </div>
        <div className={`${styles.contactDescription}`}>
          <div className={`${styles.textDescriptionContact}`}>
            <p>
              I&apos;m excited about the opportunity to connect with you! <br /> Whether you have questions, collaboration ideas, or just want to say hello, this is the perfect place to reach out. <br /> Feel free to drop me a message using the form, <br /> and I&apos;ll respond as promptly as possible.
            </p>
            <p className={`${styles.email}`}>
              Email: <a href="mailto:contact.mzhuravleva@gmail.com" className={`${styles.myEmail}`}>contact.mzhuravleva@gmail.com</a>
            </p>
          </div>
          <div className={`${styles.contactForm}`}>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" autoComplete="off" placeholder='•' />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" autoComplete="off" placeholder='•' />
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" autoComplete="off" placeholder='•' />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" autoComplete="off" placeholder='•'></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact