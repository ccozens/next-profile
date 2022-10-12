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
      <div className={styles.projectCard}>
        <div
          className={styles.projectBlurb}
          dangerouslySetInnerHTML={{ __html: item }}
        ></div>
      </div>
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
