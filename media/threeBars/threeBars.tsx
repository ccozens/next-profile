import threeBars from './threeBars.svg';
import Image from 'next/image';
import styles from '@/styles/nav.module.css'
export const threeBarsImage = () => {
    return (
        <Image className={styles.threeBarsImage}
                src={threeBars}
                height={40}
                width={40}
              />
    )
}