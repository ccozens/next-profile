import Image from 'next/image';
import background from '../media/background.webp'

const Background = () => {

    return (
        <div>
            <Image 
            // src={bgPhoto}
            src="/background_rsz.jpg"
            alt="Worm's eye view of stars at night by Ryan Babel, from unsplash"
            layout="fill"
            objectFit="cover"
            priority={true}
            />  
        </div>
    )
};

export default Background;