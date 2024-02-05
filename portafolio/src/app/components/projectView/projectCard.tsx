import styles from "../../styles/project.module.css";
import Image from "next/image";
interface props{
    padd:boolean
}


const ProjectCard = ({padd}:props) => {
    return (
        <li className={styles.project}>
            <Image
                    src="https://cdn.worldvectorlogo.com/logos/mcdonald-s-5.svg"
                    width={450}
                    height={600}
                    alt="Picture of the author"
                    style={{background:'white'}}
                />
            <h3 className={styles.projectTitle}>Project Name</h3>
            <p className={styles.projectText}>As a Full Stack Developer at AutoZone, I led the development of a dynamic web-based application to analyze and enhance performance metrics for various AutoZone services. Using React and TypeScript for the frontend and Java with Spring Boot for the backend, I employed Atomic Design principles and a layered architecture to ensure scalability and maintainability.</p>
        </li>
    )
}
export default ProjectCard;
