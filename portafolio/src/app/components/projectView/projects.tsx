import styles from "../../styles/project.module.css";
import ProjectCard from "./projectCard";

const Projects = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title} >Projects</h2>
            <ul className={styles.projectContainer}>
                <li><ul className={styles.projectCollumn}>
                <ProjectCard name="My Portfolio" pText="As a Full Stack Developer at AutoZone, I led the development of a dynamic web-based application to analyze and enhance performance metrics for various AutoZone services. Using React and TypeScript for the frontend and Java with Spring Boot for the backend, I employed Atomic Design principles and a layered architecture to ensure scalability and maintainability." pImage="/superCool.png"/>
                <ProjectCard name="Project Name" pText="As a Full Stack Developer at AutoZone, I led the development of a dynamic web-based application to analyze and enhance performance metrics for various AutoZone services. Using React and TypeScript for the frontend and Java with Spring Boot for the backend, I employed Atomic Design principles and a layered architecture to ensure scalability and maintainability." pImage="/AZ.png"/>
                <ProjectCard name="Project Name" pText="As a Full Stack Developer at AutoZone, I led the development of a dynamic web-based application to analyze and enhance performance metrics for various AutoZone services. Using React and TypeScript for the frontend and Java with Spring Boot for the backend, I employed Atomic Design principles and a layered architecture to ensure scalability and maintainability." pImage="/Museo.png"/>
                </ul></li>
                <li><ul className={styles.projectCollumn + ' ' + styles.left}>
                <ProjectCard name="Project Name" pText="As a Full Stack Developer at AutoZone, I led the development of a dynamic web-based application to analyze and enhance performance metrics for various AutoZone services. Using React and TypeScript for the frontend and Java with Spring Boot for the backend, I employed Atomic Design principles and a layered architecture to ensure scalability and maintainability." pImage="/WIKI.png"/>
                <ProjectCard name="Project Name" pText="As a Full Stack Developer at AutoZone, I led the development of a dynamic web-based application to analyze and enhance performance metrics for various AutoZone services. Using React and TypeScript for the frontend and Java with Spring Boot for the backend, I employed Atomic Design principles and a layered architecture to ensure scalability and maintainability." pImage="/IBM.png"/>
                </ul></li>
            </ul>
        </div>
    )
}
export default Projects;
