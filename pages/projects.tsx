import Layout from '@/components/layout';
import styles from '@/styles/projects.module.css';
import Image from 'next/image';
import {
  profileLogos,
  molBioToolsLogos,
} from '@/components/projects/logos/projectLogos';
import profileSite from '../public/next-profile.webp';
import molBioToolsHome from '../public/mol-bio-tools.webp';
import { getItemsFromFile } from '../lib/processMarkdown';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

//  tech logo div as vertical stack
const Projects = ({
  sections,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // destructure staticProps import
  const [profileBlurb, molBioToolsBlurb] = sections;

  return (
    <Layout>
      <div className={styles.projectHeading}>
        <p>
          I began coding seriously in March 2022. I was already using
          Python for data analysis, and started frontend engineering
          in May 2022. These projects have all been undertaken since
          then. I currently work in Python, Javascript, Typescript
          with either native CSS or TailwindCSS.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.projectCard}>
          <div
            className={styles.projectTitle}
            dangerouslySetInnerHTML={{ __html: profileBlurb.title }}
          ></div>
          <div className={styles.projectMedia}>
            <a
              className={styles.projectImage}
              href="https://next-profile-v4mi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Snapshot of profile site homepage"
                src={profileSite}
              />
            </a>
            <div className={styles.techLogos}>{profileLogos}</div>
          </div>
          <p
            className={styles.projectBlurb}
            dangerouslySetInnerHTML={{ __html: profileBlurb.content }}
          ></p>
        </div>

        <div className={styles.projectCard}>
          <div
            className={styles.projectTitle}
            dangerouslySetInnerHTML={{
              __html: molBioToolsBlurb.title,
            }}
          ></div>
          <div className={styles.projectMedia}>
            <a
              className={styles.projectImage}
              href="https://creative-cocada-575991.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Snapshot of molbiotools site homepage"
                src={molBioToolsHome}
              />
            </a>
            <div className={styles.techLogos}>{molBioToolsLogos}</div>
          </div>
          <div
            className={styles.projectBlurb}
            dangerouslySetInnerHTML={{
              __html: molBioToolsBlurb.content,
            }}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const blurb = ['profileBlurb', 'molBioToolsBlurb'];
  const fields = ['title', 'date', 'content'];
  const sections = getItemsFromFile(blurb, fields);

  return { props: { sections } };
};
