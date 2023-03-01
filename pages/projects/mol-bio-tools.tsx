import Layout from '@/components/layout';
import styles from '@/styles/projects.module.css';
import { getReadme } from '../../lib/processMarkdown';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const MolBioTools = ({
  item,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  return (
    <Layout>
      <div className={styles.readme}> 
      <div className={`${styles.projectCard} ${styles.subProjectCard}`}>
        <div
          className={styles.projectBlurb}
          dangerouslySetInnerHTML={{ __html: item }}
        ></div>
      </div>
      </div>
      <div>
        <p> &gt; 1400 views in first 24 h when posted on <a href="https://www.reddit.com/r/molecularbiology/comments/y2whaq/protein_analysis_translation_and_reverse/">reddit</a></p>
        <p> &gt; 1100 impressions in first 24 h when posted on <a href="https://www.linkedin.com/feed/update/urn:li:activity:6986291038659170304/">LinkedIn</a> </p>
      </div>
    </Layout>
  );
};

export default MolBioTools;

// get readme from github
export const getStaticProps: GetStaticProps = async () => {
  const project = 'mol-bio-tools'; // amend to project title to fetch from remote repo
  const urlStart = 'https://raw.githubusercontent.com/ccozens/';
  const urlEnd = '/main/README.md';
  const urlFull = urlStart + project + urlEnd;

  const item = await getReadme(urlFull);

  return { props: { item } };
};
