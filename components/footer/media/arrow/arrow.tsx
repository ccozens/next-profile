import arrow from './arrow-up-right.svg';
import Image from 'next/image';

export const arrowImage = () => {
    return (
        <Image 
            alt="Arrow pointing up and right in square"
                src={arrow}
                height={12}
                width={12}
              />
    )
}