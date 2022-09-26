import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/header';
import Background from '@/components/background';
import Footer from '@/components/footer';
import styles from '@/styles/index.module.css';

export default function Home() {

  const chrisPhoto = 'https://res.cloudinary.com/dyvlh6dln/image/upload/w_400,c_fill,ar_1:1,g_auto/v1663849827/next-profile/chris_caa7fc.jpg';
  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Cozens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Background />
      <Header />
      <main>

        

        <div className={styles.card}>
          <Image className={styles.chrisPhoto} src={chrisPhoto} height={400} width={400} />
          
        <h1 className={styles.title}>Chris Cozens</h1>
        <p className={styles.descriptionTop}>Molecular biologist</p>
        <p className={styles.descriptionBottom}> Frontend engineer</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
