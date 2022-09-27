import threeDots from './threeDots.svg';
import Image from 'next/image';
import styles from '@/styles/nav.module.css'

export const threeDotsImage = () => {
    return (
        <Image className={styles.threeDotsImage}
                src={threeDots}
                height={30}
                width={30}
              />
    )
}