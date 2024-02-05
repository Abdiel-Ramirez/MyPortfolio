import styles from "./styles/page.module.css";
import Start from "./components/start";
import About from "./components/about";
import Projects from "./components/projectView/projects";
import Strengths from "./components/strengths";

const Home = () => {
  return (
    <main className={styles.main}>

      <Start />
      <div className={styles.pageLayout}>
        <div className={styles.navSection}>
          <div className={styles.navMain}>
            <div className={styles.sideLimit}><div className={styles.sideText}>About Me</div></div>
            <div className={styles.sideLimit}><div className={styles.sideText}>Projects</div></div>
            <div className={styles.sideLimit}><div className={styles.sideText}>Strengths</div></div>
          </div>
        </div>
        <div className={styles.mainSection}>
          <About />

          <Projects />

          <Strengths />
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </main>
  );
}
export default Home