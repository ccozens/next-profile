import Image from 'next/image';

const Background = () => {

    const bgPhoto = 'https://res.cloudinary.com/dyvlh6dln/image/upload/v1664008243/next-profile/ryan-hutton-Jztmx9yqjBw-unsplash_zzb28c.webp';

    return (
        <div>
            <Image 
            src={bgPhoto} 
            alt="Worm's eye view of start at night by Ryan Babel, from unsplash"
            layout="fill"
            objectFit="cover"
            />  
        </div>
    )
};

export default Background;