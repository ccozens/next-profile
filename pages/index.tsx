import Head from 'next/head';
import Image from 'next/image';
import { arrowImage } from '../media/arrow/arrow';
import styles from '@/pages/index.module.css';

export default function Home() {

  const chrisPhoto = 'https://res.cloudinary.com/dyvlh6dln/image/upload/w_400,c_fill,ar_1:1,g_auto/v1663849827/next-profile/chris_caa7fc.jpg';
  const bgPhoto = 'https://res.cloudinary.com/dyvlh6dln/image/upload/v1664008243/next-profile/ryan-hutton-Jztmx9yqjBw-unsplash_zzb28c.webp';
  
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Cozens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bgWrap}>
        <Image 
        src={bgPhoto} 
        alt="Worm's eye view of start at night by Ryan Babel, from unsplash"
        layout="fill"
        objectFit="cover"
        priority={true}
         />  
        </div>
      <header>
        <div className={styles.name}>CHRIS <br></br>COZENS</div>
        <div className={styles.nav}> nav</div>
      </header>
      <main>

        

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
