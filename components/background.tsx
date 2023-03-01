import Image from 'next/image';

const Background = () => {


    return (
        <div>
            <Image 
            src={"/background.webp"} 
            alt="Worm's eye view of stars at night by Ryan Babel, from unsplash"
            layout="fill"
            objectFit="cover"
            priority={true}
            />  
        </div>
    )
};

export default Background;