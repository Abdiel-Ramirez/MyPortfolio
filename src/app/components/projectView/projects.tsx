import styles from "../../styles/project.module.css";
import ProjectCard from "./projectCard";

const Projects = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title} >Projects</h2>
            <ul className={styles.projectContainer}>
                <li><ul className={styles.projectCollumn}>
                <ProjectCard name="My Portfolio" pText="Designed and developed an attractive portfolio website using Next.js, with a focus on implementing best programming practices and optimizing for search engines. This passion project was not only an opportunity to showcase my skills but also a chance to have fun experimenting with new techniques and design concepts. " pImage="./superCool.png" lText="Link to GitHub Repo" lLink="https://github.com/Abdiel-Ramirez/MyPortafolio" lName="GitRepo"/>
                <ProjectCard name="AutoZone Intern" pText="Led the development of a web-based application for performance analysis at AutoZone. Utilized React, TypeScript, Java with Spring Boot, and Google Cloud Services. Served as Scrum Master, contributing to Software Requirements Specifications. Key achievements include successful delivery of a powerful tool for AutoZone's IT support. This experience deepened technical proficiency and honed leadership skills." pImage="./AZ.png" lText="" lLink="" lName=""/>
                <ProjectCard name="Museo Semilla App" pText="Developed an iOS app to streamline museum tour guide tasks and enhance accounting, quality check, and service management processes. Created a progressive web app for client tours. Used Swift for iOS development and Django for backend. Led Software Requirements Specifications and team management. Designed iOS app interfaces, implemented app security, and conducted testing. Utilized Agile SCRUM methodology and Git for version control. " pImage="./Museo.png" lText="See More" lLink="https://www.youtube.com/watch?v=RFc8qAZJZ8s" lName="MuseoSemilla"/>
                </ul></li>
                <li><ul className={styles.projectCollumn + ' ' + styles.left}>
                <ProjectCard name="Tec-Chihuahua iGEM Wiki" pText="Played a pivotal role in translating biotechnology results into an online Wiki as part of a collaborative effort with biotech and law students for the global competition iGEM 2023. Functioning primarily as a programming teacher, code reviewer, and code writer, I worked closely with the team to ensure the effective implementation of our project." pImage="./WIKI.png" lText="Link to Wiki" lLink="https://2023.igem.wiki/tec-chihuahua/" lName="Wiki"/>
                <ProjectCard name="Inteligent City with IBM" pText='Collaborated with IBM to develop an experimental simulation using Intelligent Agents to replicate traffic patterns in a "Smart" intersection. The project resulted in a 3D city simulation in Unity, where cars were programmed with intelligent behaviors to navigate based on destinations and communicate with other vehicles and city infrastructure.' pImage="./IBM.png" lText="" lLink="" lName=""/>
                </ul></li>
            </ul>
        </div>
    )
}
export default Projects;
