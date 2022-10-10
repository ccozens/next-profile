import styles from '@/styles/nav.module.css';
import { githubLogo } from './media/github-logo/githubLogo';
import { linkedInLogo } from './media/linkedin-logo/linkedInLogo';
import {
  emailLogoPlaceholder,
  emailLogoHover,
} from './media/email/email';
import {
  hamburgerActive,
  hamburgerPlaceholder,
} from './media/menu/hamburger';
import Link from 'next/link';
import ActiveLink from './activeLink';
import { useState, useEffect, MouseEvent } from 'react';

const navList = ['Home', 'About', 'Projects'];

const navItems = navList.map((item) => (
  <li className={styles.navItem} key={item}>
    <ActiveLink
      activeClassName={styles.active}
      href={item.toLowerCase()}
    >
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
    </ActiveLink>
  </li>
));

// items for dropdown navigation list
const navItemDropdown = navList.map((item) => (
  <li className={styles.dropDownItem} key={item}>
    <Link href={item.toLowerCase()}>{item}</Link>
  </li>
));

const NavMenu = () => {
  // set expanded nav state on click
  const [expandedNav, setExpandedNav] = useState(false);
  const mouseClickNav = (event: MouseEvent) => {
    setExpandedNav(!expandedNav);
  };

  // switch hamburger icon when expanded nav state changes
  const [hamburgerImage, setHamburgerImage] = useState(
    hamburgerPlaceholder()
  );

  useEffect(() => {
    !expandedNav
      ? setHamburgerImage(hamburgerPlaceholder())
      : setHamburgerImage(hamburgerActive());
  }, [expandedNav]);

  return (
    <div>
      {navItems}

      <button className={styles.hamburger} onClick={mouseClickNav}>
        {hamburgerImage}
      </button>
      <ul
        className={
          !expandedNav
            ? styles.dropdownHidden
            : styles.dropdownContainer
        }
      >
        {navItemDropdown}
      </ul>

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

      <a
        className={styles.emailLogo}
        href="mailto:officechrisgarden@gmail.com?subject='website contact'"
      >
        {emailLogoPlaceholder()}
        {emailLogoHover()}
      </a>
    </div>
  );
};

export default NavMenu;
