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
                    titleS="HEADLINE"
                    textS="Some text Blah Blah Blah BlahSome text Blah Blah Blah BlahSome text Blah Blah Blah BlahSome text Blah Blah Blah Blah Blah Blah BlahSome text Blah Blah Blah Blah Blah"
                    textS2="Blah BlahSome text Blah Blah Blah Blah BlahSome text Blah Blah BlahSome text Blah Blah BlahSome " 
                    drawing={StrengthI1}/>
                <Strength
                    titleS="HEADLINE"
                    textS="Some text Blah Blah Blah BlahSome text Blah Blah Blah lah Blah BlahSome text Blah Blah Blah Blah Blah Blah BlahSome "
                    textS2="Blah BlahSome text Blah Blah Blah Blah BBlah B" 
                    drawing={StrengthI2}/>
                <Strength
                    titleS="SMOLL"
                    textS="Some text Blah Blah Blah BlahSome text Blah Blah Blah BlahSome text Blah Blah Blah BlahSome text Blah Blah Blah Blah Blah Blah BlahSome text Blah Blah Blah Blah Blah Blah BlahSome text Blah Blah Blah "
                    textS2="" 
                    drawing={StrengthI3}/>
                <Strength
                    titleS="HEADLINE MORE"
                    textS="Some text Blah Blah Blah BlahSome text Blah Blah Blah BlahSome text Blah Blah Blah BlahSome text Blah Blah Blah Blah Blah Blah BlahSome text Blah Blah Blah Blah Blah Blah BlahSome text Blah Blah Blah  "
                    textS2="" 
                    drawing={StrengthI4}/>

            </ul>
        </div>
    )
}
export default Strengths;
