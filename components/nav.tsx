import Link from 'next/link';
import styles from '@/styles/nav.module.css';
import { githubLogo } from '../media/github-logo/githubLogo';
import { linkedInLogo } from '../media/linkedin-logo/linkedInLogo';

const navList = ['Home', 'About', 'Projects', 'Contact'];

const navItems = navList.map((item) => (
  <li className={styles.navItem} key={item}>
    <Link href={item.toLowerCase()}>
      <a className={styles.anchor}>
        <span
          className={styles.hiddenAnchor}
          aria-hidden="true"
          data-content={item}
        >
          {' '}
        </span>
        {item}
      </a>
    </Link>
  </li>
));

const NavMenu = () => {
  return (
    <div>
      {navItems}

      <a
        className={styles.navLogo}
        href="https://github.com/ccozens"
        target="_blank"
        rel="noopener noreferrer"
      >
        {githubLogo()}
      </a>

      <a
        className={styles.navLogo}
        href="https://www.linkedin.com/in/chris-cozens-b2883a45/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkedInLogo()}
      </a>
    </div>
  );
};

export default NavMenu;
