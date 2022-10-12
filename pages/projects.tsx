import Layout from '@/components/layout';
import styles from '@/styles/projects.module.css';
import Image from 'next/image';
import {
  profileLogos,
  molBioToolsLogos,
} from '@/components/projects/logos/projectLogos';
import profileSite from '../public/next-profile.webp';
import molBioToolsHome from '../public/mol-bio-tools.webp';

const Projects = () => {


  return (
    <Layout>
      <div className={styles.projectHeading}>
        <p>
          I began coding seriously in March 2022. I was already using
          Python for data analysis, and started frontend engineering
          in May 2022. These projects have all been undertaken since
          then. I currently work in Python, Javascript, Typescript
          with CSS or TailwindCSS.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.projectCard}>
          <div className={styles.projectTitle}> Profile site</div>
          <div className={styles.projectMedia}>
            <figure className={styles.projectFigure}>
            <Image
              className={styles.projectImage}
                alt="Snapshot of profile site homepage"
                src={profileSite}
              />
              <figcaption className={styles.projectFigureCaption}>
              <a 
              className={styles.projectLink}
                href="https://next-profile-v4mi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              > Visit site</a>
              <a
              className={styles.projectLink}
                href={`projects/next-profile`}
                target="_blank"
                rel="noopener noreferrer"
              > About site </a>
              </figcaption>
            </figure>
            <div className={styles.techLogos}>{profileLogos}</div>
          </div>
          <p className={styles.projectBlurb}>
            My profile site: built with NextJS, Tailwind and CSS;
            deployed at Vercel.
          </p>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectTitle}>MolBioTools</div>
          <div className={styles.projectMedia}>
          <figure className={styles.projectFigure}>
          <Image
                alt="Snapshot of molbiotools site homepage"
                src={molBioToolsHome}
              />
              <figcaption className={styles.projectFigureCaption}>
              <a 
              className={styles.projectLink}
                href="https://creative-cocada-575991.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              > Visit site</a>
              <a
              className={styles.projectLink}
                href={`projects/mol-bio-tools`}
                target="_blank"
                rel="noopener noreferrer"
              > About site </a>
              </figcaption>
            </figure>
            
            <div className={styles.techLogos}>{molBioToolsLogos}</div>
          </div>
          <div className={styles.projectBlurb}>
            Molecular Biology Tools: built with React (CRA),
            Javascript and TailwindCSS; deployed at netlify.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
