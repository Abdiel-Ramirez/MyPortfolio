import styles from "../styles/about.module.css";
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container + " " + styles.flexCard}>
      <div className={styles.aboutMe}>






      <svg viewBox="0 0 800 600" className={styles.abby}>
  <symbol id="s-text">
    <text textAnchor="middle"
          x="12%"
          y="15%"
          className={styles.textline}
          >
      AB
    </text>
    <text textAnchor="middle"
          x="12%"
          y="31%"
          className={styles.textline}
          >
      BY
    </text>
    
  </symbol>
  
  <g className={styles.gants}>
    <use href="#s-text"
      className={styles.textcopy}></use>     
    <use href="#s-text"
      className={styles.textcopy}></use>     
    <use href="#s-text"
      className={styles.textcopy}></use>     
    <use href="#s-text"
      className={styles.textcopy}></use>     
    <use href="#s-text"
      className={styles.textcopy}></use>     
  </g>
  
  
</svg>





        <h2 className={styles.titleText}>About Me</h2>
        <p className={styles.aboutText}>I am Abdiel, a non-binary Computer Science student at Tecnológico de Monterrey, set to graduate in July 2024. Passionate about developing attractive and easy-to-use software applications, I possess excellent problem-solving skills and a strong ability to thrive in team environments. I am eager to contribute to your company's product development as a software developer and am committed to furthering my growth and skills in coding. Feel free to call me Abdiel or Abby.</p>
      </div>
      <div className={styles.faceContain}>
        <Image
          src="./Abby.png"
          width={340}
          height={480}
          alt="Picture of the author"
          style={{ background: 'white' }}
        />

        <div className={styles.spinnerbox}>
          <div className={styles.solarsystem}>
            <div className={styles.earthorbit + " " + styles.orbit}>
              <div className={styles.planet + " " + styles.earth}></div>
              <div className={styles.venusorbit + " " + styles.orbit}>
                <div className={styles.planet + " " + styles.venus}></div>
                <div className={styles.mercuryorbit + " " + styles.orbit}>
                  <div className={styles.planet + " " + styles.mercury}></div>
                  <div className={styles.sun}></div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
export default About;
