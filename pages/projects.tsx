import Layout from "@/components/layout";
import ProjectPanels from "@/components/projects/project";
import styles from '../styles/projects.module.css';



const Projects = () => {


    return(
        <Layout>
            <div className={styles.example}></div>
            <ProjectPanels />
        </Layout>
    )
}

export default Projects;