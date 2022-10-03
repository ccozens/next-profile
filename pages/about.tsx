import Layout from '@/components/layout';
import { getItemsFromFile } from '../lib/processMarkdown';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import styles from '@/styles/about.module.css';
import Image from 'next/image';

//   const About = ( {text}: Post ) => { // will resolve html to type Post
const About = ({
  sections,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [frontend, molbio] = sections;

  const molBioImg =
    'https://res.cloudinary.com/dyvlh6dln/image/upload/c_scale,w_350,q_100/c_crop,h_350,w_350,bo_1px_solid_rgb:eaeaea/v1664538481/next-profile/photo-1532187863486-abf9dbad1b69_idh557.webp';
  const frontendImg =
    'https://res.cloudinary.com/dyvlh6dln/image/upload/c_scale,h_350,q_100/c_crop,h_350,w_350,bo_1px_solid_rgb:eaeaea/v1664538535/next-profile/photo-1543285198-3af15c4592ce_umbf6h.webp';

  return (
    <Layout>
      <section id="molbio">
        <div className={styles.aboutCard}>
          <h1 className={styles.molBioTitle}>{molbio.title}</h1>
          <div
            className={styles.molBioText}
            dangerouslySetInnerHTML={{ __html: molbio.content }}
          ></div>
          <div className={styles.molBioImgContainer}>
            <Image
            className={styles.molBioImg}
              alt="stylised dna helix"
              src={molBioImg}
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>

      <section id="frontend">
        <div className={styles.aboutCard}>
          <div className={styles.frontendImgContainer}>
            <Image
                className={styles.frontendImg}
              alt="computer screen with code"
              src={frontendImg}
              width={200}
              height={200}
            />
          </div>
          <h1 className={styles.frontendTitle}>{frontend.title}</h1>
          <div
            className={styles.frontendText}
            dangerouslySetInnerHTML={{ __html: frontend.content }}
          ></div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const about = ['molbio', 'frontend'];
  const fields = ['title', 'date', 'content'];
  const sections = getItemsFromFile(about, fields);

  return { props: { sections } };
};

/*
// works for single file
export const getStaticProps: GetStaticProps = async () => {
  const about = 'molbio';
  const items = getItemsFromFile(about, ['title', 'date', 'content']);

  return { props: { items } };
};
*/
