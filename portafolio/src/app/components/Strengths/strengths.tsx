import styles from "../../styles/strengths.module.css";
import Strength from "./strength";

const Strengths = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title} >Strengths</h2>
            <ul className={styles.strengthContainer}>
                <Strength
                    titleS="HEADLINE"
                    textS="Some text Blah Blah Blah BlahSome text Blah Blah Blah BlahSome text Blah Blah Blah BlahSome text Blah Blah Blah Blah Blah Blah BlahSome text Blah Blah Blah Blah Blah"
                    textS2="Blah BlahSome text Blah Blah Blah Blah BlahSome text Blah Blah BlahSome text Blah Blah BlahSome " />
                <Strength
                    titleS="HEADLINE"
                    textS="Some text Blah Blah Blah BlahSome text Blah Blah Blah lah Blah BlahSome text Blah Blah Blah Blah Blah Blah BlahSome "
                    textS2="Blah BlahSome text Blah Blah Blah Blah BBlah B" />
                <Strength
                    titleS="SMOLL"
                    textS="Some text Blah Blah Blah BlahSome text Blah Blah Blah BlahSome text Blah Blah Blah BlahSome text Blah Blah Blah Blah Blah Blah BlahSome text Blah Blah Blah Blah Blah Blah BlahSome text Blah Blah Blah "
                    textS2="" />
                <Strength
                    titleS="HEADLINE MORE"
                    textS="Some text Blah Blah Blah BlahSome text Blah Blah Blah BlahSome text Blah Blah Blah BlahSome text Blah Blah Blah Blah Blah Blah BlahSome text Blah Blah Blah Blah Blah Blah BlahSome text Blah Blah Blah  "
                    textS2="" />

            </ul>
        </div>
    )
}
export default Strengths;
