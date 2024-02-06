import styles from "../../styles/project.module.css";
import ProjectCard from "./projectCard";

const Projects = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title} >Projects</h2>
            <ul className={styles.projectContainer}>
                <div className={styles.projectCollumn}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                </div>
                <div className={styles.projectCollumn + ' ' + styles.left}>
                <ProjectCard/>
                <ProjectCard/>
                </div>
            </ul>
        </div>
    )
}
export default Projects;
