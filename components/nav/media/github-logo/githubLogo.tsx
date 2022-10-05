import github from './githubLogo.svg';
import Image from 'next/image';
import styles from '@/styles/nav.module.css';

export const githubLogo = () => {
    return (
        <Image 
                className={styles.logo}
                src={github}
                height={25}
                width={25}
              />
    )
}