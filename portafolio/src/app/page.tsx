'use client'
import styles from "./styles/page.module.css";
import Start from "./components/start";
import About from "./components/about";
import Projects from "./components/projectView/projects";
import Strengths from "./components/Strengths/strengths";
import UseScroll from "./hooks/useScroll";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  let container1 = useRef<HTMLInputElement>(null);
  let container2 = useRef<HTMLInputElement>(null);
  let container3 = useRef<HTMLInputElement>(null);
  let container4 = useRef<HTMLInputElement>(null);
  const [navh1, setNavh1] = useState(580);
  const [navh2, setNavh2] = useState(580);
  const [navh3, setNavh3] = useState(580);
  const [scrollY, height] = UseScroll([container1, container2, container3, container4]);
  const [color, setColor] = useState('var(--accent-w)');

  useEffect(() => {
    if(height.length > 1){
      if(scrollY > height[0] + height[1] - 130) {
        setColor('var(--accent-3)');

      } else {
        setColor('var(--accent-w)');
      }
      setNavh1(height[1] - 250)
      setNavh2(height[2])
      setNavh3(height[3] + 170)
    }

  }, [scrollY]);

  return (
    <main className={styles.main}>

      <section ref={container1} style={{ width: '100%'}}><Start /></section>
      <div className={styles.pageLayout}>
        <div className={styles.navSection}>
          <div className={styles.navMain} style={{ color: color }}>
            <div className={styles.sideLimit} style={{height:navh1}}><div className={styles.sideText}>About Me</div></div>
            <div className={styles.sideLimit} style={{height:navh2}}><div className={styles.sideText}>Projects</div></div>
            <div className={styles.sideLimit} style={{height:navh3}}><div className={styles.sideText}>Strengths</div></div>
          </div>
        </div>
        <div className={styles.mainSection}>

          <section ref={container2} style={{ width: '100%' }} ><About /></section>
          <section ref={container3} style={{ width: '100%' }} ><Projects /></section>
          <section ref={container4} style={{ width: '100%' }} ><Strengths /></section>
        </div>
      </div>

    <footer className={styles.footerSy}>
      Footer goes here
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
    </footer>

    </main>
  );
}
export default Home