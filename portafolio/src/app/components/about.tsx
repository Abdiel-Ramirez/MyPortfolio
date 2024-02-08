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
          y="19%"
          className={styles.textline}
          >
      AB
    </text>
    <text textAnchor="middle"
          x="12%"
          y="35%"
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
        <p className={styles.aboutText}>Engineering student in Computational Technology at Tecnológico de Monterrey passionate about developing attractive and easy-to-use software applications. Excellent problem-solving skills and ability to perform well in a team, either as a developer or a leader. I am looking to help your company develop its product as a software developer, as well as grow and develop my own skills as a coder. </p>
      </div>
      <div className={styles.faceContain}>
        <Image
          src="/test.png"
          width={342}
          height={480}
          alt="Picture of the author"
          style={{ background: 'white' }}

          objectFit="cover"
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
