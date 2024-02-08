import styles from "../../styles/project.module.css";
import Image from "next/image";

interface props{
    name: string,
    pText: string,
    pImage: string,
    lText: string,
    lLink: string,
    lName: string
}

const ProjectCard = ({name, pText, pImage, lText, lLink, lName}: props) => {
    let Link= () =>{
        return(<></>)  
    };
    if (lText !== ''){
        Link = () =>{
            return(
            <a className={styles.link} aria-label={lName} href={lLink}>{lText}</a>
        )}
    }
    
    return (
        <li className={styles.project}>
            <Image
                    src={pImage}
                    width={400}
                    height={580}
                    alt="Picture of the author"
                    style={{background:'white'}}
                />
            <h3 className={styles.projectTitle}>{name}</h3>
            <p className={styles.projectText}>{pText} {Link()}</p>
        </li>
    )
}
export default ProjectCard;
