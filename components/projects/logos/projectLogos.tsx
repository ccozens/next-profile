// all images from svgporn.com
import GithubLogo from './githubLogo-tweaked.svg';
import JavascriptLogo from './javascript-tweaked.svg';
import NextjsLogo from './nextjs-tweaked.svg';
import ReactLogo from './react-tweaked.svg';
import TailwindLogo from './tailwind-tweaked.svg';
import TypescriptLogo from './typescript-tweaked.svg';
import Image from 'next/image';
import styles from '../../../styles/projects.module.css';

const techLogos = {
  github: { alt: 'Github logo', logo: GithubLogo, url: 'https://github.com/ccozens' },
  javascript: { alt: 'javascript logo', logo: JavascriptLogo, url: 'javascript.com' },
  next: { alt: 'Next JS logo', logo: NextjsLogo, url: 'https://nextjs.org/' },
  react: { alt: 'React logo', logo: ReactLogo, url: 'reactjs.org' },
  tailwind: { alt: 'TailwindCSS logo', logo: TailwindLogo, url: 'tailwindcss.com' },
  typescript: { alt: 'typescript logo', logo: TypescriptLogo, url: 'https://www.typescriptlang.org/' },
};

const profileLogoList = [
  techLogos.next,
  techLogos.typescript,
  techLogos.github,
];

export const profileLogos = profileLogoList.map((logo) => (
  <a href={logo.url} target="_blank" rel="noopener noreferrer">
    <Image
      className={styles.techLogos}
      alt={`${logo.alt} logo`}
      src={logo.logo}
      width={50}
      height={50}
    />
  </a>
));
