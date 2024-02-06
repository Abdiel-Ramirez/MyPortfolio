import { useEffect, useRef, useState } from "react";
import styles from "../styles/start.module.css"
import Image from 'next/image'
import UseScroll from "../hooks/useScroll";


const Start = () => {
    const [upP, setUpP] = useState(0);
    const [sizeP, setSizeP] = useState(1);
    const [shadowP, setShadow] = useState(0);
    const [showMenu, setShowMenu] = useState(-87);
    let container = useRef<HTMLInputElement>(null);
    const [scrollY, height] = UseScroll([container])
    const [closeP, setcloseP] = useState(100);

    useEffect(() => {
        let percentDiff = 100;
        let upScale = 0;
        let sizeScale = 1;
        let shadow = 0;
        let menu = -87;
        if (height) {
            if (scrollY < (height[0] * 0.9)) {
                percentDiff = 100 - (100 * (scrollY / (height[0] * 0.9)))
                shadow = 31 * (100 - percentDiff) / 50;

                if (shadow > 28) {
                    shadow = 28;
                }
                sizeScale = percentDiff / 100;
                if (percentDiff <= 80) {
                    sizeScale = 80 / 100;
                    upScale = -80 + percentDiff;
                }
            }
            else {
                percentDiff = 0;
                upScale = -80;
                sizeScale = 1 - 80 / 100;
                shadow = 28
            }
            menu = -112 + (shadow * 4) + 25;
        }

        setShowMenu(menu)
        setcloseP(percentDiff)
        setSizeP(sizeScale)
        setUpP(upScale)
        setShadow(shadow)

    }, [scrollY])

    return (
        <div className={styles.start} ref={container}>
            <div className={styles.orangeBox} style={{ top: showMenu + 'px' }}>Menu</div>
            <div className={styles.card + " " + styles.titleCard}>
                <h1 className={styles.titleText}> Hi I’m <span className={styles.titleAccent}>Abby </span> </h1>
                <div className={styles.positionsListContainer}>
                    <ul className={styles.positionsList}>
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
                <div className={styles.shadow} style={{ boxShadow: "36px -13px 34px 2px rgb(0 0 0 / " + shadowP + "%) inset" }} />
                <div className={styles.headLinks}>
                    <nav>
                        <ul className={styles.quickLinks}>
                            <li>About Me</li>
                            <li>Projects</li>
                            <li>Strengths</li>
                        </ul>
                    </nav>

                </div>
                <div className={styles.pushBack}>
                    <div className={styles.card} style={{ transform: "scale(" + sizeP + ") translate(0%, " + upP + "%)" }} >



                    <svg id="visual"  className={styles.downBlob} viewBox="0 0 1000 1000" width="1000" height="1000" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <g transform="translate(497.77134745061085 507.91614577726)">
                            <path fill="#ffffff">
                            <animate attributeName="d"
                                        dur="6000ms"
                                        repeatCount='indefinite'
                                        values="
                                        M336.4 -391.9C419.9 -330.8 460.6 -209.6 487.6 -82.2C514.6 45.2 527.9 178.9 474 274.9C420 370.9 298.8 429.3 177.8 461.6C56.9 494 -63.7 500.2 -168.9 462.6C-274.2 425 -364 343.5 -409.7 245.6C-455.5 147.7 -457.2 33.4 -423.4 -60.2C-389.6 -153.7 -320.4 -226.5 -243.9 -288.8C-167.4 -351.2 -83.7 -403.1 21.4 -428.5C126.4 -454 252.8 -453 336.4 -391.9;
                                        M362.4 -400.9C459.6 -350.4 521.3 -226.6 528.6 -105.1C535.9 16.5 488.8 135.7 424.2 242.5C359.7 349.2 277.6 443.3 181.8 462C85.9 480.7 -23.9 423.9 -120.8 371.5C-217.8 319.1 -302 271 -344.4 198.4C-386.8 125.9 -387.4 28.7 -390 -88.2C-392.6 -205.2 -397.2 -342 -332.5 -398.3C-267.8 -454.5 -133.9 -430.3 -0.6 -429.5C132.6 -428.7 265.3 -451.5 362.4 -400.9;
                                        M302 -371.1C369.7 -303.2 387.7 -187.4 395.5 -79.2C403.3 29 400.8 129.5 363 223.3C325.2 317.2 252 404.3 153 455.7C53.9 507.1 -71 522.8 -191 493C-311.1 463.1 -426.2 387.8 -465.7 285.3C-505.3 182.9 -469.3 53.2 -420.9 -48.7C-372.6 -150.7 -311.8 -225 -239.6 -292.1C-167.4 -359.2 -83.7 -419.1 16.8 -439C117.2 -459 234.4 -439 302 -371.1;
                                        M282.7 -344.9C375.1 -259.3 464.8 -178.6 473.6 -89.3C482.4 -0.1 410.3 97.6 350 201.9C289.6 306.2 240.9 417.2 159.8 452.6C78.7 488 -34.9 447.9 -157.1 412C-279.4 376.1 -410.3 344.3 -483.1 259.1C-555.8 174 -570.4 35.4 -527.7 -73.2C-484.9 -181.9 -384.8 -260.6 -287.3 -345.3C-189.8 -429.9 -94.9 -520.5 0.1 -520.6C95.1 -520.7 190.3 -430.4 282.7 -344.9;
                                        M259.7 -304.9C331.8 -249.1 382.1 -162.7 395.2 -72.1C408.3 18.5 384.3 113.3 347.9 223.8C311.4 334.4 262.6 460.9 177.9 493.9C93.3 526.9 -27.2 466.4 -119.3 401.1C-211.3 335.7 -274.8 265.5 -335.2 182.9C-395.6 100.2 -452.9 5.1 -439.2 -78.4C-425.6 -161.9 -341 -233.8 -256 -287.3C-171 -340.8 -85.5 -375.9 4.2 -380.9C93.8 -385.8 187.7 -360.7 259.7 -304.9;
                                        M344.4 -419.5C427.7 -340.4 464 -214.3 459.7 -101.4C455.3 11.5 410.4 111.3 349.5 187.7C288.6 264.1 211.7 317.2 128.4 343.4C45.1 369.6 -44.5 369 -123.3 339.8C-202.1 310.7 -270.2 253 -350.5 173.5C-430.7 94 -523.1 -7.2 -519.2 -102.4C-515.3 -197.5 -415.1 -286.4 -312.6 -362.2C-210 -437.9 -105 -500.5 12.7 -515.6C130.5 -530.8 261 -498.7 344.4 -419.5;
                                        M336.4 -391.9C419.9 -330.8 460.6 -209.6 487.6 -82.2C514.6 45.2 527.9 178.9 474 274.9C420 370.9 298.8 429.3 177.8 461.6C56.9 494 -63.7 500.2 -168.9 462.6C-274.2 425 -364 343.5 -409.7 245.6C-455.5 147.7 -457.2 33.4 -423.4 -60.2C-389.6 -153.7 -320.4 -226.5 -243.9 -288.8C-167.4 -351.2 -83.7 -403.1 21.4 -428.5C126.4 -454 252.8 -453 336.4 -391.9;
                                        "

                                    />
                        </path></g>
                    </svg>
                            



                        <div className={styles.spinnerbox}>
                            <div className={styles.blueorbit + ' ' + styles.leo}>
                            </div>

                            <div className={styles.greenorbit + ' ' + styles.leo}>
                            </div>

                            <div className={styles.redorbit + ' ' + styles.leo}>
                            </div>

                            <div className={styles.whiteorbit + ' ' + styles.w1 + ' ' + styles.leo}>
                            </div>

                            <div className={styles.leoborder1}>
                                <div className={styles.leocore1}></div>
                            </div>
                            <div className={styles.leoborder2}>
                                <div className={styles.leocore2}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Start