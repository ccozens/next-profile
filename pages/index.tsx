import Layout from '../components/layout'
import Image from 'next/image';
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import styles from '@/styles/index.module.css';
import chrisPhoto from '../public/chris_caa7fc.webp';
const Page: NextPageWithLayout = () => {
  
  return (
    <div className={styles.container}>
        <div className={styles.card}>
          <Image className={styles.chrisPhoto} alt="Photo of Chris" src={chrisPhoto} />
        <h1 className={styles.title}>Chris Cozens</h1>
        <p className={styles.descriptionTop}>Molecular biologist</p>
        <p className={styles.descriptionBottom}> Frontend engineer</p>
        </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page;
