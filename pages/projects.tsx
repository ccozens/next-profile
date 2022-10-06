import Layout from '@/components/layout';
import styles from '@/styles/projects.module.css';
import Image from 'next/image';
import { profileLogos } from '@/components/projects/logos/projectLogos';
import profileSite from '../public/profileSite_q_100w_500.webp';

import { getItemsFromFile } from '../lib/processMarkdown';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

//  tech logo div as vertical stack
const Projects = ({
  sections,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [profileBlurb] = sections;

  return (
    <Layout>
        <div className={styles.projectHeading}> 
            <p>I began coding seriously in March 2022. I was already using Python for data analysis, and started frontend engineering in May 2022. These projects have all been undertaken since then. I can currently work in Python, Javascript and Typescript.</p>
        </div>
      <div className={styles.grid}>

        <div className={styles.projectCard}>
          <div
            className={styles.projectTitle}
            dangerouslySetInnerHTML={{ __html: profileBlurb.title }}
          ></div>
          <div className={styles.projectMedia}>
            <Image
              className={styles.projectImage}
              alt="Snapshot of profile site homepage"
              src={profileSite}
            />
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
            dangerouslySetInnerHTML={{ __html: profileBlurb.title }}
          ></div>
          <div className={styles.projectMedia}>
            <Image
              className={styles.projectImage}
              alt="Snapshot of profile site homepage"
              src={profileSite}
            />
            <div className={styles.techLogos}>{profileLogos}</div>
          </div>
          <div
            className={styles.projectBlurb}
            dangerouslySetInnerHTML={{ __html: profileBlurb.content }}
          ></div>
        </div>

        <div className={styles.projectCard}>
          <div
            className={styles.projectTitle}
            dangerouslySetInnerHTML={{ __html: profileBlurb.title }}
          ></div>
          <div className={styles.projectMedia}>
            <Image
              className={styles.projectImage}
              alt="Snapshot of profile site homepage"
              src={profileSite}
            />
            <div className={styles.techLogos}>{profileLogos}</div>
          </div>
          <div
            className={styles.projectBlurb}
            dangerouslySetInnerHTML={{ __html: profileBlurb.content }}
          > 
          </div>
        </div>

        <div className={styles.projectCard}>
          <div
            className={styles.projectTitle}
            dangerouslySetInnerHTML={{ __html: profileBlurb.title }}
          ></div>
          <div className={styles.projectMedia}>
            <Image
              className={styles.projectImage}
              alt="Snapshot of profile site homepage"
              src={profileSite}
            />
            <div className={styles.techLogos}>{profileLogos}</div>
          </div>
          <div
            className={styles.projectBlurb}
            dangerouslySetInnerHTML={{ __html: profileBlurb.content }}
          > 
          </div>
        </div>

        <div className={styles.projectCard}>
          <div
            className={styles.projectTitle}
            dangerouslySetInnerHTML={{ __html: profileBlurb.title }}
          ></div>
          <div className={styles.projectMedia}>
            <Image
              className={styles.projectImage}
              alt="Snapshot of profile site homepage"
              src={profileSite}
            />
            <div className={styles.techLogos}>{profileLogos}</div>
          </div>
          <div
            className={styles.projectBlurb}
            dangerouslySetInnerHTML={{ __html: profileBlurb.content }}
          > 
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const profileBlurb = ['profileBlurb'];
  const fields = ['title', 'date', 'content'];
  const sections = getItemsFromFile(profileBlurb, fields);

  return { props: { sections } };
};
