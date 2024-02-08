import styles from "../../styles/strengths.module.css";
import Image from "next/image";

interface props {
    titleS: string,
    textS: string,
    textS2: string,
    drawing: () => JSX.Element
}

const Strength = ({titleS, textS, textS2, drawing}:props) => {
    return (
        <li className={styles.strength}>
            <div className={styles.topStrength}>
                <h3 className={styles.strengthTitle}>{titleS}</h3>
                <p className={styles.strengthText}>{textS} <br/> {textS2} </p>
            </div>
            <div className={styles.drawing}>
            {drawing()}
            </div>
        </li>
    )
}
export default Strength;
