import arrow from './arrow-up-right.svg';
import Image from 'next/image';

export const arrowImage = () => {
    return (
        <Image className="arrowImage"
                src={arrow}
                height={12}
                width={12}
              />
    )
}