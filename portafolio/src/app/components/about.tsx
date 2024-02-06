import styles from "../styles/about.module.css";
import Image from 'next/image'

const About = () => {
    return (
        <div className={styles.container + " " + styles.flexCard}>
            <div className={styles.aboutMe}>
                <Image
                    src="https://cdn.worldvectorlogo.com/logos/mcdonald-s-5.svg"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    style={{ background: 'white' }}
                />
                <h2 className={styles.titleText}>About Me</h2>
                <p className={styles.aboutText}>Engineering student in Computational Technology at Tecnológico de Monterrey passionate about developing attractive and easy-to-use software applications. Excellent problem-solving skills and ability to perform well in a team, either as a developer or a leader. I am looking to help your company develop its product as a software developer, as well as grow and develop my own skills as a coder. </p>
            </div>
            <div className={styles.faceContain}>
                <Image
                    src="https://cdn.worldvectorlogo.com/logos/mcdonald-s-5.svg"
                    width={300}
                    height={480}
                    alt="Picture of the author"
                    style={{ background: 'white' }}
                />

<div className={styles.spinnerbox}>
  <div className={styles.solarsystem}>
    <div className={styles.earthorbit +" "+ styles.orbit}>
      <div className={styles.planet +" "+ styles.earth}></div>
      <div className={styles.venusorbit +" "+ styles.orbit}>
        <div className={styles.planet +" "+ styles.venus}></div>
        <div className={styles.mercuryorbit +" "+ styles.orbit}>
          <div className={styles.planet +" "+ styles.mercury}></div>
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
