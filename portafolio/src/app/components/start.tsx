'use client'
import { useEffect, useRef, useState } from "react";
import styles from "../styles/start.module.css"
import Image from 'next/image'
import UseScroll from "../hooks/useScroll";


const Start = () => {
    const [closeP, setcloseP] = useState(100);
    const [upP, setUpP] = useState(0);
    const [sizeP, setSizeP] = useState(1);
    const [shadowP, setShadow] = useState(0);
    const [showMenu, setShowMenu] = useState(-87);
    let container = useRef<HTMLInputElement>(null);
    const [scrollY, height] = UseScroll([container])

    useEffect(() => {
        let percentDiff = 100;
        let upScale = 0;
        let sizeScale = 1;
        let shadow = 0;
        let menu = -87;
        if (height){
        if (scrollY < (height[0]*0.9)) {
            percentDiff = 100 - (100 * (scrollY / (height[0]*0.9)))
            shadow = 31 * (100 - percentDiff) / 50;
            
            if (shadow > 28) {
                shadow = 28;
            } 
            sizeScale = percentDiff/100;
            if (percentDiff <= 80) {
                sizeScale = 80/100;
                upScale = -80 + percentDiff;
            }
        }
        else {
            percentDiff = 0;
            upScale = -80;
            sizeScale = 1 - 80/100;
            shadow = 28
        }
        menu = -112 + (shadow*4) + 25;
    }

        setShowMenu(menu)
        setcloseP(percentDiff)
        setSizeP(sizeScale)
        setUpP(upScale)
        setShadow(shadow)

    }, [scrollY])

    return (
        <div className={styles.start} ref={container}>
            <div className={styles.orangeBox} style={{top: showMenu + 'px'}}>Menu</div>
            <div className={styles.card + " " + styles.titleCard}>
                <h1 className={styles.titleText}> Hi I’m <span className={styles.titleAccent}>Abby </span> </h1>
                <div className={styles.positionsListContainer}>
                <ul  className={styles.positionsList}>
                    <li>Entrepreneur</li>
                    <li>Web Designer</li>
                    <li>Full Stack Dev</li>
                    <li>AI Enthusiast</li>
                    <li>Adventurer</li>
                </ul>
                </div>

                <a className={styles.about}>More about me</a>
            </div>
            <div className={styles.card + " " + styles.animationCard} style={{ width: closeP + "%" }}>
                <div className={styles.shadow} style={{boxShadow: "36px -13px 34px 2px rgb(0 0 0 / "+ shadowP +"%) inset"}}/>
                <div className={styles.headLinks}>
                    <nav>
                <ul  className={styles.quickLinks}>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Strengths</li>
                </ul>
                </nav>
                
                </div>
                <div className={styles.pushBack}>
                <div className={styles.card} style={{transform: "scale(" + sizeP + ") translate(0%, " + upP + "%)"}} >
                <Image
                    src="https://cdn.worldvectorlogo.com/logos/mcdonald-s-5.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                </div>
            </div>
            </div>
        </div>
    )
}
export default Start