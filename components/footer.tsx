import { arrowImage } from '../media/arrow/arrow';
import styles from '@/styles/footer.module.css'

const Footer = () => {
    return (
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
    )
};

export default Footer;
