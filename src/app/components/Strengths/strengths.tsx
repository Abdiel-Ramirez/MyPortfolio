import styles from "../../styles/strengths.module.css";
import Strength from "./strength";
import StrengthI1 from "./icons/strengthI1";
import StrengthI2 from "./icons/strengthI2";
import StrengthI3 from "./icons/strengthI3";
import StrengthI4 from "./icons/strengthI4";

const Strengths = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title} >Strengths</h2>
            <ul className={styles.strengthContainer}>
                <Strength
                    titleS="Teamwork"
                    textS=" I excel in collaborative environments, valuing the diverse perspectives and skills that each team member brings. My ability to communicate effectively and work towards common goals ensures successful outcomes on group projects."
                    textS2="" 
                    drawing={StrengthI1}/>
                <Strength
                    titleS="Efficiency"
                    textS="With a focus on productivity and optimization, I strive to streamline processes and maximize resources to achieve results efficiently. "
                    textS2="Whether it's coding solutions or project management, I am dedicated to delivering high-quality work in a timely manner." 
                    drawing={StrengthI2}/>
                <Strength
                    titleS="Passion"
                    textS=" I approach every task with enthusiasm and dedication, driven by a genuine love for software development and problem-solving. My passion fuels my continuous learning and motivates me to push boundaries and explore new possibilities in my work."
                    textS2="" 
                    drawing={StrengthI3}/>
                <Strength
                    titleS="Thinking Outside the Box"
                    textS="I thrive on innovation and creativity, constantly seeking novel approaches and unconventional solutions to challenges. By thinking outside the box, I bring fresh perspectives and unique insights to projects, fostering innovation and driving progress."
                    textS2="" 
                    drawing={StrengthI4}/>

            </ul>
        </div>
    )
}
export default Strengths;
