import Head from 'next/head';
import Image from 'next/image';
import { arrowImage } from '../media/arrow/arrow';
import styles from '@/pages/index.module.css';

export default function Home() {

  const chrisPhoto = 'https://res.cloudinary.com/dyvlh6dln/image/upload/c_scale,w_400/v1663849827/next-profile/chris_caa7fc.jpg';
  const bgPhoto = 'https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80';
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Cozens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className={styles.name}>CHRIS <br></br>COZENS</div>
        <div className={styles.nav}> nav</div>
      </header>
      <main>

        <div className={styles.bgWrap}>
        <Image 
        src={bgPhoto} 
        alt="Worm's eye view of start at night by Ryan Babel, from unsplash"
        layout="fill"
        objectFit="cover"
         />  
        </div>

        <div className={styles.card}>
          <Image className={styles.chrisPhoto} src={chrisPhoto} height={400} width={400} />
          
        <h1 className={styles.title}>Chris Cozens</h1>
        <p className={styles.description}>Molecular biologist  <br>
        </br> Frontend engineer</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Built with{' '}
          <span>
            <a
              className={styles.footerLink}
              href="https://www.next.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              NEXT.js
              {arrowImage()}
            </a>
          </span>
          &&  
          {' '}
          <span>
            <a
              className={styles.footerLink}
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Typescript
              {arrowImage()}
            </a>
          </span>
          , hosted by{' '}
          <span>
            <a
              className={styles.footerLink}
              href="https://www.vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
              {arrowImage()}
            </a>
          </span>{' '}
          &&{' '}
          <span>
            <a
              className={styles.footerLink}
              href="https://www.cloudinary.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudinary
              {arrowImage()}
            </a>
          </span>{' '}
          &&{' '}
          <span>
            <a
              className={styles.footerLink}
              href="https://www.sanity.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sanity
              {arrowImage()}
            </a>
          </span>{' '}
        </p>
      </footer>
    </div>
  );
}
