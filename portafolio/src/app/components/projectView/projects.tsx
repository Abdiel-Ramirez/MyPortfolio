import styles from "../../styles/project.module.css";
import ProjectCard from "./projectCard";

const Projects = () => {
    return (
        <div className={styles.container}>
            <h2>Projects</h2>
            <ul>
                
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </ul>
        </div>
    )
}
export default Projects;
