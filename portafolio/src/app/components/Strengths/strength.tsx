import styles from "../../styles/strengths.module.css";
import Image from "next/image";

interface props {
    titleS: string,
    textS: string
    textS2: string
}

const Strength = ({titleS, textS, textS2}:props) => {
    return (
        <li className={styles.strength}>
            <div className={styles.topStrength}>
                <h3 className={styles.strengthTitle}>{titleS}</h3>
                <p className={styles.strengthText}>{textS} <br/> {textS2} </p>
            </div>
            <div className={styles.drawing}>
            <Image
                src="https://cdn.worldvectorlogo.com/logos/mcdonald-s-5.svg"
                width={180}
                height={180}
                alt="Picture of the author"
            />
            </div>
        </li>
    )
}
export default Strength;
