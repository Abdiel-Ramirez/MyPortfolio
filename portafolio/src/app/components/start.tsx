'use client'
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "../styles/start.module.css"
import Image from 'next/image'


const Start = () => {
    const [scrollY, setScrollY] = useState(0);
    const [closeP, setcloseP] = useState(100);
    const [upP, setUpP] = useState(0);
    const [sizeP, setSizeP] = useState(1);
    const [shadowP, setShadow] = useState(0);
    let container = useRef(null);
    let [height, setHeight] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (container !== null) {
                let heightTemp = container.current.offsetHeight
                setHeight(heightTemp - (heightTemp * 0.1))
            }
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        console.log(scrollY)
        console.log(height)
        let percentDiff = 100;
        let upScale = 0;
        let sizeScale = 1;
        let shadow = 0;
        if (height){
        if (scrollY < height) {
            percentDiff = 100 - (100 * (scrollY / height))
            shadow = 31 * (100 - percentDiff) / 50;
            
            if (shadow > 28) {
                shadow == 28
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
            shadow == 31
        }}

        setcloseP(percentDiff)
        setSizeP(sizeScale)
        setUpP(upScale)
        setShadow(shadow)

    }, [scrollY])

    return (
        <div className={styles.start} ref={container}>
            <div className={styles.card + " " + styles.titleCard}>
                <h1> Hi I’m Abby </h1>
                <ul>
                    <li>Web Designer</li>
                    <li>Full Stack Developer</li>
                    <li>AI Enthusiast</li>
                    <li>Entrepreneur</li>
                    <li>Adventurer</li>
                </ul>

                <a>More about me</a>
            </div>
            <div className={styles.card + " " + styles.animationCard} style={{ width: closeP + "%" }}>
                <div className={styles.shadow} style={{boxShadow: "36px -13px 34px 2px rgb(0 0 0 / "+ shadowP +"%) inset"}}/>
                <div className={styles.pushBack}>
                <div style={{transform: "scale(" + sizeP + ") translate(0%, " + upP + "%)"}} >
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