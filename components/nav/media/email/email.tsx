import emailPlaceholder from './mail-edit-svgrepo-com-placeholder.svg';
import emailHover from './mail-edit-svgrepo-com.svg';
import Image from 'next/image';
import styles from '@/styles/nav.module.css';

export const emailLogoPlaceholder = () => {
    return (
        <Image 
                alt="email symbol"
                className={styles.logo}
                src={emailPlaceholder}
                height={25}
                width={25}
              />
    )
}

export const emailLogoHover = () => {
    return (
        <Image 
        alt="writing email symbol"
                className={styles.logo}
                src={emailHover}
                height={25}
                width={25}
              />
    )
}