import hamburgerPlaceholderSVG from './hamburgerPlaceholder.svg';
import hamburgerActiveSVG from './hamburgerActive.svg';
import Image from 'next/image';
import styles from '@/styles/nav.module.css';

export const hamburgerPlaceholder = () => {
    return (
        <Image 
                alt="email symbol"
                className={styles.hamburger}
                src={hamburgerPlaceholderSVG}
                height={25}
                width={25}
              />
    )
}

export const hamburgerActive = () => {
    return (
        <Image 
        alt="writing email symbol"
                className={styles.hamburger}
                src={hamburgerActiveSVG}
                height={25}
                width={25}
              />
    )
}