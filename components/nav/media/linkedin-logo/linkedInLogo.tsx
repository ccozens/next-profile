import linkedin from './linkedInLogo.svg';
import Image from 'next/image';
import styles from '@/styles/nav.module.css';

export const linkedInLogo = () => {
    return (
        <Image 
                className={styles.logo}
                src={linkedin}
                height={25}
                width={25}
              />
    )
}